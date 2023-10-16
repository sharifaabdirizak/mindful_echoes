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
  const daily_affirmation = req.body.daily_affirmation
  const user_id = req.body.user_id
  const sqlQuery = `
    INSERT INTO "journal_entries"
        ("daily_affirmation", "user_id")
        VALUES
        ($1, $2);
  `
  const sqlValues = [daily_affirmation, user_id];
  pool.query(sqlQuery, sqlValues)
    .then((response) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error in /api/journal_entires POST', error);
        res.sendStatus(500);
    })

});

module.exports = router;