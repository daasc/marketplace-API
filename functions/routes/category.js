const { Router } = require('express');
const ServiceCategory = require('../services/category.js');
const serviceCategory = new ServiceCategory();
const { validate }  = require('../middleware/validation.js');
const { validationRules } = require('../validation/category');

const router = Router();


router.get('/', async (req, res) => {
  try {
    const categories = await serviceCategory.get();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/', validationRules(), validate, async (req, res) => {
  try {
    const { body: category } = req;
    await serviceCategory.store(category);
    res.status(200).json({message: 'created with success!'});
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;