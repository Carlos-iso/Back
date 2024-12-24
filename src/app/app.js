"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");
const dotenv = require("dotenv").config();

const app = express();
const router = express.Router();

//Conectar ao banco mongodb
mongoose.connect(config.connectionString);

//Carregar models
const Ban = require("../models/ban.js");

//Carregar Rotas
const indexRoute = require("../routes/index-route");
const banList = require("../routes/banned-route.js");

//Chama As Variaveis De Ambiente
const frontCollect = process.env.FRONT_COLLECT;

// Habilita O CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", frontCollect);
  res.header(
    "Access-Control-Allow-Headers",
    "*Origen, X-Requested-With, Content-Type, Accept, x-access-token"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS, PATCH, HEAD"
  );
  next();
});
app.use(cors()); 


app.use(
  bodyParser.json({
    limit: "5mb",
  })
);
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use("/", indexRoute);
app.use("/ban", banList);

module.exports = app;
