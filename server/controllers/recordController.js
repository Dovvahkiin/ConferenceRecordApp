const RecordGetModel = require("../models/recordModel.js");
const recordGetInstance = new RecordGetModel();

class RecordGetController {
  GetRecordsControl(req, res) {
    const records = recordGetInstance.GetRecords();
    res.json(records);
  }
  GetRecordById(req, res) {
    const id = parseInt(req.params.id, 10);
    const recordById = recordGetInstance.GetRecordById(id);
    if (!recordById) {
      res.status(404).json({ message: "Record is not found" });
    } else return res.json(recordById);
  }
}

module.exports = RecordGetController;
