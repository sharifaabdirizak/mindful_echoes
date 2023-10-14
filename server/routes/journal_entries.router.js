const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

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