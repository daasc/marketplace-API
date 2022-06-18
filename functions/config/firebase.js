const { auth, firestore } = require('firebase-admin');

const { initializeApp, applicationDefault } = require('firebase-admin/app');

initializeApp({
  credential: applicationDefault(),
  databaseURL: "https://teste-72112.firebaseio.com/"
})

const db = new firestore.Firestore();

module.exports = { db, auth: auth() };
