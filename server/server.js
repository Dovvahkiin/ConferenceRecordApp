// requires
const express = require("express");
const cors = require("cors");
require("dotenv").config("./.env");
const pg = require("pg");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

//main variables
const app = express();
const port = 3000;
const corsOptions = {
  origin: ["http://localhost:5173"],
};

//

app.use(cors(corsOptions));

app.get("/api", (req, res) => res.json({ message: "Hello World!" }));
app.listen(port, () => console.log(`Server started on port: ${port}!`));
