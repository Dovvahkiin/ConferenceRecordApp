const userGetModel = require("../models/userModel.js");
const userModelInstance = new userGetModel();

class UserGetController {
  GetUsersControl(req, res) {
    const users = userModelInstance.GetUsers();
    res.json(users);
  }
  GetUserByIdControl(req, res) {
    const id = parseInt(req.params.id, 10);
    const userById = userModelInstance.GetUserById(id);
    console.log(userById);
    if (!userById) {
      return res.status(404).json({ message: "User does not exists!" });
    }
    return res.json(userById);
  }
}

module.exports = UserGetController;
