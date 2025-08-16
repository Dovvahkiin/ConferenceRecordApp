const pool = require("../config/database.js");

class BaseModelView {
  constructor(view) {
    this.view = view;
  }

  async GetTableView() {
    const [rows] = await pool.query(`select * from ${this.view}`);
    return rows;
  }

  async GetByID(id, idColumn = "ID") {
    const [getID] = await pool.query(
      `select * from ${this.view} where ${idColumn}= ?`,
      [id]
    );
    return getID.length ? getID[0] : null;
  }
}

module.exports = BaseModelView;
