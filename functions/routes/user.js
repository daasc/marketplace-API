const { Router } = require('express');
const ServiceUser = require('../services/user.js');
const { validate } = require('../middleware/validation.js');
const { validationRules } = require('../validation/user');
const serviceUser = new ServiceUser();
const router = Router();

router.get('/', async (req, res) => {
  try {
    const users = await serviceUser.get();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { params: { id } } = req;
    const user = await serviceUser.getId(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/', validationRules({}), validate, async (req, res) => {
  try {
    const { body: user } = req;
    await serviceUser.store(user);
    res.status(200).send('created with success!');
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put('/:id', validationRules({ validateUpdate: true }), validate, async (req, res) => {
  try {
    const { params: { id }, body: newUser } = req;
    await serviceUser.update(id, newUser);
    res.status(200).send('updated with success!');
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put('/password/:id', validationRules({ validatePassword: true }), validate, async (req, res) => {
  try {
    const { params: { id }, body: newPassword } = req;
    await serviceUser.updatePassword(id, newPassword);
    res.status(200).send('password updated with success!');
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { params: { id } } = req;
    await serviceUser.delete(id);
    res.status(200).send('deleted with success!');
  } catch (error) {
    res.status(400).send(error);
  }
});


module.exports = router;