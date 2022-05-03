const { getFirestore } = require('firebase-admin/firestore');

const { initializeApp, applicationDefault } = require('firebase-admin/app');

initializeApp({
  credential: applicationDefault(),
  databaseURL: "https://teste-72112.firebaseio.com/"
})

const db = getFirestore();

module.exports = db;
