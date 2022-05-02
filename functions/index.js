const functions = require("firebase-functions");
const express = require('express');
const routes = require('./routes');
const app = express();

app.use('/', routes);

exports.api = functions.https.onRequest(app)