const express = require("express");
const bodyParser = require('body-parser')
const routes = require('./routes/index')

const { session_config } = require("./config");

const app = express();

const session = require("express-session")({
  secret: session_config.keySecret,
  resave: true,
  saveUninitialized: true,
  cookie: {
    path: "/",
    httpOnly: true,
    maxAge: session_config.timeMaxSession,
    name: "TiendaCokkie",
    rolling: true,
  },
});

app.use(session);
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

app.use("/", routes);

module.exports = app;
