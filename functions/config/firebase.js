const { initializeApp } = require("firebase/app");
const serviceAccount = require('./firebase-key.json');

const app = initializeApp(serviceAccount);

module.exports = app;
