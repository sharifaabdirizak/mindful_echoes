const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");


/**
 * GET route template
 */

router.get("/", rejectUnauthenticated, (req, res) => {
  console.log("seeing previous journal entries");
  const currentUser = req.user.id;
  const sqlQuery = `
    SELECT * from "journal_entries"
    WHERE "user_id" = $1;
  `;
  const sqlValue = [currentUser];
  pool
    .query(sqlQuery, sqlValue)
    .then((response) => {
      console.log(response.rows);
      res.send(response.rows);
    })
    .catch((error) => {
      console.log("error in /api/journal_entires GET", error);
        //add query to get all the journal entries
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  // POST route code here


  // {
   
  //   content: journalContent,
  //   date: selectedDate, 
  // },


  const content = req.body.content;
  const date = req.body.date;
  const daily_affirmation = req.body.daily_affirmation;
  const category = req.body.category;
  const user_id =req.user.id;
  
  const sqlQuery = `
    INSERT INTO "journal_entries"
        ("daily_affirmation", "content", "date", "category", "user_id")
        VALUES
        ($1, $2, $3, $4, $5)
    RETURNING id;`;
  const sqlValues = [daily_affirmation, content, date, category, user_id];
  pool
    .query(sqlQuery, sqlValues)
    .then((response) => {
      const new_id = response.rows[0].id;
      res.status(201).send({ id: new_id });
    })
    .catch((error) => {
      console.log("error in /api/journal_entries POST", error);
      res.status(500);
    });
});

router.delete("/:id", (req, res) => {
  const entry_to_delete = req.params.id;
  const sqlQuery = `
    DELETE FROM "journal_entries"
      WHERE "id" = $1;
  `;
  const sqlValue = [entry_to_delete];
  pool
    .query(sqlQuery, sqlValue)
    .then((response) => {
      console.log("deleted journal entry with id", entry_to_delete);
      res.sendStatus;
    })
    .catch((error) => {
      console.log("error in /api/journal_entires DELETE", error);
      res.sendStatus(500);
    });
});



router.get('/:id', rejectUnauthenticated, (req, res) => {
  console.log('journal entry we are editing:', req.params);  
  const current_user = req.user.id;
  const journal_id = req.params.id;
  const sqlQuery = `
    SELECT * FROM "journal_entries"
      WHERE "user_id" = $1
      AND "id" = $2;
  `;
  const sqlValues = [current_user, journal_id];
  pool.query(sqlQuery, sqlValues)
    .then((response) => {
      console.log('here is the journal entry you requested:', response.rows[0]);
      res.send(response.rows[0]);
    })
    .catch((error) => {
      console.log('error in /api/journal_entries/:id GET', error);
      res.sendStatus(500);
    })
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
  console.log('updating journal content with id no.', req.params.id);
  const journal_id = req.params.id;
  const updated_content = req.body.content;
  const current_user = req.user.id;
  const sqlQuery = `
    UPDATE "journal_entries"
      SET "content" = $1
      WHERE "id" = $2 AND "user_id" = $3;
  `;
  const sqlValues = [updated_content, journal_id, current_user];
  pool.query(sqlQuery, sqlValues)
  .then((response) => {
    console.log('updated journal entry content');
    res.sendStatus(201);
  })
  .catch((error) => {
    console.log('error in /api/journal_entries/:id PUT', error);
    res.sendStatus(500);
  })
})



module.exports = router;