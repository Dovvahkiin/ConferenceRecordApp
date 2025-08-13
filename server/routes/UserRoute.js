const express = require("express");
const router = express.Router();
const UserGetController = require("../controllers/userController.js");

const userControl = new UserGetController();

router.get("/users", userControl.GetUsersControl);
router.get("/users/:id", userControl.GetUserByIdControl);

module.exports = router;
