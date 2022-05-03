const express = require('express');
const firebaseApp = require('../config/firebase');
const { getFirestore, collection, getDocs } = require('firebase/firestore/lite');
const db = getFirestore(firebaseApp);

const router = express.Router();

router.get('/',async (req, res) => {
  try {
    const citiesCol = collection(db, 'test');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    res.status(200).send('hello world!');
  } catch (error) {
    res.status(400).send('error!')
  }
});

module.exports = router;