const pool = require("../config/database.js");
const BaseModelView = require("./baseViewModel.js");

class UserGetModel extends BaseModelView {
  constructor() {
    super("getusers");
  }

  async LoginUser(username) {
    try {
      const [login] = await pool.query(
        "select * from getusers where username = ? LIMIT 1",
        [username]
      );
      return login[0];
    } catch (err) {
      console.log("Failed:\n" + err);
    }
  }
}

class UserPostModel {
  async CreateNewUser(username, fname, lname, email, password) {
    try {
      const [newUser] = await pool.query(`call addNewUser (?,?,?,?,?,3)`, [
        username,
        fname,
        lname,
        email,
        password,
      ]);
      return newUser;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = { UserGetModel, UserPostModel };
