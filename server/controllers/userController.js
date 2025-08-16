const UserGetModel = require("../models/userModel.js");
const userModelInstance = new UserGetModel();

class UserGetController {
  async GetUsersControl(req, res) {
    const users = await userModelInstance.GetTableView();
    console.table(users);
    res.json(users);
  }
  async GetUserByIdControl(req, res) {
    const id = parseInt(req.params.id, 10);
    const userById = await userModelInstance.GetUserByID(id);
    console.log(userById);
    if (!userById) {
      return res.status(404).json({ message: "User does not exists!" });
    }
    return res.json(userById);
  }
}

module.exports = UserGetController;
