// requires
const express = require("express");
const cors = require("cors");
require("dotenv").config("./.env");
const pg = require("pg");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const configData = require("./config/data.js");

const UserRouter = require("./routes/UserRoute.js");

//main variables
const app = express();

app.use(UserRouter);

//app.use(cors(configData.corsOptions));

app.listen(configData.nodePort, () =>
  console.log(`Server started on port: ${configData.nodePort}!`)
);
