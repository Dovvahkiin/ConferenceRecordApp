const db = require("../testngDB/records.json");

class RecordGetModel {
  GetRecords() {
    return db;
  }
  GetRecordById(id) {
    return db.records.find((record) => record.id === id);
  }
}

module.exports = RecordGetModel;
