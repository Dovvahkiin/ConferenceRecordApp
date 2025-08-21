const express = require("express");
const authToken = require("../middlewares/authentication.js");
const authorization = require("../middlewares/authorization.js");

const router = express.Router();
const {
  UserGetController,
  UserPostController,
} = require("../controllers/userController.js");

const [UserGetControl, UserPostControl] = [
  new UserGetController(),
  new UserPostController(),
];

router.get("/users/:id", authToken, UserGetControl.GetUserByIdControl); // test user profile
router.get(
  "/users",
  authToken,
  authorization("admin"),
  UserGetControl.GetUsersControl
); // admin panel users authorization *admin*

module.exports = router;
