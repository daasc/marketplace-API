const { Router } = require('express');
// const fireStore = require('../config/firebase');
const ServiceProduct = require('../services/product');
const serviceProduct = new ServiceProduct();
const router = Router();

router.get('/', async (req, res) => {
  try {
    const result = await serviceProduct.get();
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error)
  }
});

module.exports = router;