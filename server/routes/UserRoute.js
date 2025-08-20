const express = require("express");
const router = express.Router();
const {
  UserGetController,
  UserPostController,
} = require("../controllers/userController.js");

const [UserGetControl, UserPostControl] = [
  new UserGetController(),
  new UserPostController(),
];

router.post("/login", UserPostControl.LoginUserControl);
router.post("/register", UserPostControl.CreateUserControl);
router.get("/users/:id", UserGetControl.GetUserByIdControl);
router.get("/users", UserGetControl.GetUsersControl);

module.exports = router;
