const express = require('express');
const productRouter = require('./product');
const categoryRouter = require('./category');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.status(200).send('hello world!');
  } catch (error) {
    res.status(400).send('error!')
  }
});

router.use('/product', productRouter);
router.use('/category', categoryRouter);

module.exports = router;