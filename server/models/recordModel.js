const db = require("../testngDB/records.json");

class RecordGetModel {
  GetRecords() {
    return db;
  }
  GetRecordById(id) {
    return db.records.find((record) => record.id === id);
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
    return newRecordContent;
  }
}

module.exports = { RecordGetModel, RecordPostModel };
