require("dotenv").config("./.env");
const configData = require("./config/data.js");
const chalk = require("chalk"); // menjanje boje u terminalu

const app = require("./app.js"); // all middlewares are in app.js

app.listen(configData.nodePort, () =>
  console.log(chalk.blue(`Server started on port: ${configData.nodePort}!`))
);
