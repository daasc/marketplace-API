const { Router } = require('express');
const ServiceProduct = require('../services/product');
const { validationResult } = require('express-validation')
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    await serviceProduct.store(product);
    res.status(200).send('created with success!');
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { body: product, params: { id } } = req;
    await serviceProduct.update({ id, product });
    res.status(200).send('update with success!');
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { params: { id } } = req;
    const product = await serviceProduct.getId(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { params: { id } } = req;
    await serviceProduct.delete(id);
    res.status(200).send('product deleted with success!');
  } catch (error) {
    console.log('router => error: ', error)
    res.status(400).send(error);
  }
})


module.exports = router;