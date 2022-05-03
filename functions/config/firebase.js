require('dotenv/config');
const { initializeApp } = require("firebase/app");
const serviceAccount = require('./firebase-key');
const app = initializeApp(serviceAccount);

module.exports = app;
