// requires
const express = require("express");
const cors = require("cors");
require("dotenv").config("./.env");
const pg = require("pg");
const jwt = require("jsonwebtoken");
const configData = require("./config/data.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const UserRouter = require("./routes/UserRoute.js");
const RecordRouter = require("./routes/RecordRoute.js");

app.use("/", UserRouter);
app.use("/", RecordRouter);

//app.use(cors(configData.corsOptions));

app.listen(configData.nodePort, () =>
  console.log(`Server started on port: ${configData.nodePort}!`)
);
