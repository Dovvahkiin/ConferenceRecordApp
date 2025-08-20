const express = require("express");
const authToken = require("../middlewares/authentication.js");
const router = express.Router();
const {
  UserGetController,
  UserPostController,
} = require("../controllers/userController.js");

const [UserGetControl, UserPostControl] = [
  new UserGetController(),
  new UserPostController(),
];

router.get("/users/:id", authToken, UserGetControl.GetUserByIdControl);
router.get("/users", authToken, UserGetControl.GetUsersControl);

module.exports = router;
