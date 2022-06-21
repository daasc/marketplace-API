require("dotenv/config");
const functions = require("firebase-functions");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

exports.api = functions.https.onRequest(app);