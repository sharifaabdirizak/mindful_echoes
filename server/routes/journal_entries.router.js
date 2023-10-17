const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  // GET route code here
  const sqlQuery =`SELECT * from journal_entries`;
  pool.query(sqlQuery)
  .then(result => {
    res.send(result.rows);  
  })
  .catch(error =>{
    console.log('error: get all the journal entries', error);
    //add query to get all the journal entries
    res.sendStatus(500)
  })
});

router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('seeing previous journal entries');
  const currentUser = req.user.id;
  const sqlQuery = `
    SELECT * from "journal_entries"
    WHERE "user_id" = $1;
  `;
  const sqlValue = [currentUser]
  pool.query(sqlQuery, sqlValue)
    .then((response) => {
      console.log(response.rows)
      res.send(response.rows);
    })
    .catch((error) => {
      console.log('error in /api/journal_entires GET', error);
      res.sendStatus(500);
    })
})

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code here
  const daily_affirmation = req.body.daily_affirmation;
  const user_id = req.body.user_id;
  const sqlQuery = `
    INSERT INTO "journal_entries"
        ("daily_affirmation", "user_id")
        VALUES
        ($1, $2)
    RETURNING id;`;
  const sqlValues = [daily_affirmation, user_id];
  pool.query(sqlQuery, sqlValues)
    .then((response) => {
      const new_id = response.rows[0].id; 
      res.status(201).send({ id: new_id }); // Include id in the response
    })
    .catch((error) => {
      console.log('error in /api/journal_entries POST', error);
      res.status(500);
    });
});

router.delete('/:id', (req, res) => {
  const entry_to_delete = req.params.id;
  const sqlQuery =`
    DELETE FROM "journal_entries"
      WHERE "id" = $1;
  `;
  const sqlValue = [entry_to_delete];
  pool.query(sqlQuery, sqlValue)
    .then((response) => {
      console.log('deleted journal entry with id', entry_to_delete);
      res.sendStatus
    })
    .catch((error) => {
      console.log('error in /api/journal_entires DELETE', error);
      res.sendStatus(500);
  })
})

router.put('/:id', (req, res) => {
  const journal_to_update = req.params.id;
  const new_category = req.body.category;
  const sqlQuery = `
    UPDATE "journal_entries"
    SET "category" = $1
    WHERE "id" = $2;
  `;
  const sqlValues = [new_category, journal_to_update];
  pool.query(sqlQuery, sqlValues)
    .then((response) => {
      console.log('updated journal category with id', journal_to_update);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('error in /api/journal_entires PUT', error);
      res.sendStatus(500);
    })
})


router.put('/:id', (req, res) => {
  const journal_to_update = req.params.id;
  const new_category = req.body.category;
  const sqlQuery = `
    UPDATE "journal_entries"
    SET "category" = $1
    WHERE "id" = $2;
  `;
  const sqlValues = [new_category, journal_to_update];
  pool.query(sqlQuery, sqlValues)
    .then((response) => {
      console.log('updated journal category with id', journal_to_update);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('error in /api/journal_entires PUT', error);
      res.sendStatus(500);
    })
})



module.exports = router;