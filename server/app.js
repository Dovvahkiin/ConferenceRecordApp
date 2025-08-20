// requires
const express = require("express");
const cors = require("cors");
require("dotenv").config("./.env");
const pg = require("pg");
const jwt = require("jsonwebtoken");
const configData = require("./config/data.js");
const app = express();
const chalk = require("chalk"); // menjanje boje u terminalu
const cookieParser = require("cookie-parser");

// routes
const UserRouter = require("./routes/UserRoutes.js");
const RecordRouter = require("./routes/RecordRoutes.js");
const AuthRouter = require("./routes/AuthRoutes.js");

//middlewares
app.use(express.json());
app.use(cors(configData.corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", UserRouter);
app.use("/", RecordRouter);
app.use("/", AuthRouter);

module.exports = app;
