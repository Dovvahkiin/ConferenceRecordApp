const chalk = require("chalk");
const { UserGetModel, UserPostModel } = require("../models/userModel.js");
const { createUserValidation } = require("../validations/validations.js");

const [userGetInstance, userPostInstance] = [
  new UserGetModel(),
  new UserPostModel(),
];

class UserGetController {
  async GetUsersControl(req, res) {
    const users = await userGetInstance.GetTableView();
    console.table(users);
    res.json(users);
  }
  async GetUserByIdControl(req, res) {
    const id = parseInt(req.params.id, 10);
    const userById = await userGetInstance.GetByID(id);
    console.log(userById);
    if (!userById) {
      return res.status(404).json({ message: "User does not exists!" });
    }
    return res.json(userById);
  }
}

class UserPostController {
  async CreateUserControl(req, res) {
    const userData = req.body;

    const errors = createUserValidation(userData);
    if (errors.length > 0) {
      console.log("Validation errors:\n" + chalk.red(errors));
      return res.status(400).json({ Error: errors });
    }

    try {
      const { username, fname, lname, email, password, role } = userData;
      const createUser = await userPostInstance.CreateNewUser(
        username,
        fname,
        lname,
        email,
        password,
        role
      );
      console.log("User:\n" + userData + "\n is created.");
      res.status(200).json({ Success: true, createUser });
    } catch (err) {
      console.log("TryCatch Errors: " + err);
      res.status(500).json({ Error: err.message });
    }
  }
}

module.exports = { UserGetController, UserPostController };
