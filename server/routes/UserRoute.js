const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController.js");

const userControl = new UserController();

router.get("/users", userControl.GetUsers);

module.exports = router;
