const express = require('express');
const productRouter = require('./product');
const categoryRouter = require('./category');
const couponRouter = require('./coupon');
const bannerRouter = require('./banner');
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
router.use('/coupon', couponRouter);
router.use('/router', bannerRouter);

module.exports = router;