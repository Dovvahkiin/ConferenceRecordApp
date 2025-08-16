const pool = require("../config/database.js");

class BaseModelView {
  constructor(view) {
    this.view = view;
  }

  async GetTableView() {
    const [users] = await pool.query(`select * from ${this.view}`);
    return users;
  }
}

module.exports = BaseModelView;
