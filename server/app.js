// requires
const express = require("express");
const cors = require("cors");
require("dotenv").config("./.env");
const pg = require("pg");
const jwt = require("jsonwebtoken");
const configData = require("./config/data.js");
const app = express();
const chalk = require("chalk"); // menjanje boje u terminalu
const session = require("express-session");
const cookieParser = require("cookie-parser");

// routes
const UserRouter = require("./routes/UserRoute.js");
const RecordRouter = require("./routes/RecordRoute.js");

//middlewares
app.use(express.json());
app.use(cors(configData.corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    key: process.env.SESSION_KEY,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60, // MS * SEC * MIN ==> 1hour
    },
  })
);

app.use("/", UserRouter);
app.use("/", RecordRouter);

module.exports = app;
