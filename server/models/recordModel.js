const chalk = require("chalk"); // menjanje boje u terminalu
const pool = require("../config/database.js");
const BaseModelView = require("./baseViewModel.js");

class RecordGetModel extends BaseModelView {
  constructor() {
    super("getRecords");
  }
}

class RecordPostModel {
  CreateNewRecord(title, text) {
    const newID =
      db.records.length > 0
        ? Math.max(...db.records.map((records) => records.id)) + 1
        : 1;
    const newRecordContent = { id: newID, title, text };
    db.records.push(newRecordContent);
    console.table(db.records);
    return newRecordContent;
  }
}

module.exports = { RecordGetModel, RecordPostModel };
