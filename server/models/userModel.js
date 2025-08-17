const pool = require("../config/database.js");
const BaseModelView = require("./baseViewModel.js");

class UserGetModel extends BaseModelView {
  constructor() {
    super("getusers");
  }
}

class UserPostModel {
  async CreateNewUser(username, fname, lname, email, password, role) {
    try {
      const [newUser] = await pool.query(`call addNewUser (?,?,?,?,?,?)`, [
        username,
        fname,
        lname,
        email,
        password,
        role,
      ]);

      console.log("UserHasBeenAdded: " + newUser);
      return newUser;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = { UserGetModel, UserPostModel };
