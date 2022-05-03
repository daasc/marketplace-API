const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.status(200).send('hello world!');
  } catch (error) {
    res.status(400).send('error!')
  }
});

module.exports = router;