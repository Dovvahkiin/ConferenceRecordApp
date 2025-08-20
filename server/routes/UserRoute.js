const express = require("express");
const router = express.Router();
const {
  UserGetController,
  UserPostController,
} = require("../controllers/userController.js");

const [userGetControl, UserPostControl] = [
  new UserGetController(),
  new UserPostController(),
];

router.post("/login", UserPostControl.LoginUserControl);

router.get("/users/:id", userGetControl.GetUserByIdControl);

router
  .route("/users")
  .get(userGetControl.GetUsersControl)
  .post(UserPostControl.CreateUserControl);

module.exports = router;
