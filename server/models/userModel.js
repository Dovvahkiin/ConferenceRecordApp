const pool = require("../config/database.js");
const BaseModelView = require("./baseViewModel.js");

class UserGetModel extends BaseModelView {
  constructor() {
    super("getusers");
  }

  async LoginUser(username, password) {
    try {
      const [login] = await pool.query(
        "select UserName, Password from getusers",
        [username, password]
      );
      return login;
    } catch (err) {
      console.log("failed\n" + err);
    }
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
