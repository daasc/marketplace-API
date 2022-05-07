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

router.post('/', async (req, res) => {
  try {
    const { body: product } = req;
    await serviceProduct.store(product);
    res.status(200).send('created with success!');
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { body: product, params: { id } } = req;
    await serviceProduct.update({id, product});
    res.status(200).send('update with success!');
  } catch (error) {
    res.status(400).send(error);
  }
});


module.exports = router;