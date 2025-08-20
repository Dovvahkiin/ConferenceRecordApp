const pool = require("../config/database.js");
const BaseModelView = require("./baseViewModel.js");

class UserGetModel extends BaseModelView {
  constructor() {
    super("getusers");
  }

  async LoginUser(username, password) {
    try {
      const [login] = await pool.query(
        "select * from getusers where username = ? and password = ? LIMIT 1",
        [username, password]
      );
      return login[0];
    } catch (err) {
      console.log("Failed:\n" + err);
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
      return newUser;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = { UserGetModel, UserPostModel };
