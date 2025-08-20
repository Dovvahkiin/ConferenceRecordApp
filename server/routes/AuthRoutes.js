const express = require("express");
const router = express.Router();
const AuthenticationController = require("../controllers/authController.js");
const { UserPostController } = require("../controllers/userController.js");

const AuthControl = new AuthenticationController();
const UserPostControl = new UserPostController();

router.post("/login", AuthControl.LoginUserControl); // login
router.post("/register", UserPostControl.CreateUserControl); //register

module.exports = router;
