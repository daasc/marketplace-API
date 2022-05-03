const express = require('express');
const productRouter = require('./product');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.status(200).send('hello world!');
  } catch (error) {
    res.status(400).send('error!')
  }
});

router.use('/product', productRouter);

module.exports = router;