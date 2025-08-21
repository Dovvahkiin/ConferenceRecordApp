const express = require("express");
const router = express.Router();
const chalk = require("chalk");
const AuthenticationController = require("../controllers/authController.js");
const { UserPostController } = require("../controllers/userController.js");
const isAuth = require("../middlewares/ifAuthenticated.js");

const AuthControl = new AuthenticationController();
const UserPostControl = new UserPostController();

router.post("/login", isAuth, AuthControl.LoginUserControl); // login
router.post("/register", isAuth, UserPostControl.CreateUserControl); //register

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  console.log("User is " + chalk.yellow("successfully logged out."));
  res.json({ Message: "Successfully logged out!" });
});

module.exports = router;
