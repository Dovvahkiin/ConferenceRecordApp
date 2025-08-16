const pool = require("../config/database.js");
const BaseModelView = require("./baseViewModel.js");

class UserGetModel extends BaseModelView {
  constructor() {
    super("getusers");
  }
  async GetUserByID(id) {
    const [user] = await pool.query("select * from getusers where ID = ? ", [
      id,
    ]);
    return user.length ? user[0] : null;
  }
}

module.exports = UserGetModel;
