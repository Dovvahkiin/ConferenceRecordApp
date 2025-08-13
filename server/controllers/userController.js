const userModel = require("../models/userModel.js");
const userModelInstance = new userModel();

class UserController {
  GetUsers(req, res, next) {
    const users = userModelInstance.GetUsers();
    res.json(users);
  }
}

module.exports = UserController;
