const pool = require("../config/database.js");
const BaseModelView = require("./baseViewModel.js");

class RecordGetModel extends BaseModelView {
  constructor() {
    super("getRecords");
  }
}

class RecordPostModel {
  async CreateNewRecord(title, text) {
    try {
      const [createRecord] = await pool.query("call addNewRecord(?,0,?)", [
        title,
        text,
      ]);
      return createRecord;
    } catch (err) {
      console.log(err);
    }
  }
}

class RecordEditModel {
  async EditExistingRecord(recordID, title, content) {
    try {
      const [record] = await pool.query("call updateRecord(?,?,?)", [
        recordID,
        title,
        content,
      ]);
      return record;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

class RecordDeleteModel {
  async DeleteExistingRecord(id) {
    try {
      const [selectedRecord] = await pool.query("call deleteRecord(?)", [id]);
      return selectedRecord[0];
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = {
  RecordGetModel,
  RecordPostModel,
  RecordEditModel,
  RecordDeleteModel,
};
