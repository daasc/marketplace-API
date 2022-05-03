const { Router } = require('express');
const fireStore = require('../config/firebase');
const router = Router();

router.get('/', async (req, res) => {
  try {
    const result = await fireStore.collection('test').get()
    result.forEach(doc => {
      console.log(doc.data());
    });
    res.status(200).send('test product router')
  } catch (error) {
    res.status(400).send(error)
  }
});

module.exports = router;