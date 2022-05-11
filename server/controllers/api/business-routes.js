const router = require('express').Router();
const axios = require('axios');
require('dotenv').config();
// const YELP_API_KEY = '';

router.get('/search', async (req, res) => {
  let query = req.query;
  if (!req.query.location) delete query.location;
  if (!req.query.term) delete query.term;

  query = Object.keys(query)
    .map((key) => key + '=' + query[key])
    .join('&');
  const url = `https://api.yelp.com/v3/businesses/search?${query}`;
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`,
      },
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
