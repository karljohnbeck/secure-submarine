const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
require('dotenv').config();
axios = require('axios')
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  // axios.get(`https://api.edamam.com/search?q=chicken&app_id=${process.env.APP_ID}&app_key=${process.env.EDAMAM_KEY}`)
  //   .then((results) => res.send(results.data))
  //   .catch((error) => {
  //     console.log('Error making SELECT for secrets:', error);
  //     res.sendStatus(500);
  //   });
});

module.exports = router;