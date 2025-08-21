const chalk = require("chalk"); // menjanje boje u terminalu

const { recordValidation } = require("../validations/validations.js");
const {
  RecordGetModel,
  RecordPostModel,
  RecordEditModel,
} = require("../models/recordModel.js");
const [recordGetInstance, recordPostInstance, recordEditInstance] = [
  new RecordGetModel(),
  new RecordPostModel(),
  new RecordEditModel(),
];
/* const recordGetInstance = new RecordGetModel();
const recordPostInstance = new RecordPostModel(); */

class RecordGetController {
  async GetRecordsControl(req, res) {
    const records = await recordGetInstance.GetTableView();
    res.json(records);
  }
  async GetRecordById(req, res) {
    const id = parseInt(req.params.id, 10);
    const recordById = await recordGetInstance.GetByID(id);
    if (!recordById) {
      res.status(404).json({ message: "Record is not found" });
    } else return res.json(recordById);
  }
}

class RecordPostController {
  async CreateNewRecord(req, res) {
    const recordData = req.body;
    const errors = recordValidation(recordData);
    if (errors.length > 0) {
      console.log("Validation errors:\n" + chalk.red(errors));
      return res.status(400).json({ Error: errors });
    }
    try {
      const { title, text } = recordData;
      const createPost = await recordPostInstance.CreateNewRecord(title, text);
      console.log("Record is created");
      res.status(200).json({ succMessage: true, createPost });
    } catch (err) {
      console.log(err);
      res.status(500).json({ errMsg: "Server Error" });
    }
  }
}

class RecordEditController {
  async EditExistingRecord(req, res) {
    const data = req.body;

    const errors = recordValidation(data);
    if (errors.length > 0) {
      console.log("Validation errors:\n" + chalk.red(errors));
      return res.status(400).json({ Error: errors });
    }

    try {
      const { title, text } = data;
      const id = parseInt(req.params.id, 10);
      const editRecord = await recordEditInstance.EditExistingRecord(
        id,
        title,
        text
      );
      if (!editRecord) {
        console.log("Record not found");
        res.status(404).json({ errMsg: "Record is not found!" });
      } else return res.json({ result: editRecord[0][0] });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ errMsg: "Server Error!" });
    }
  }
}

module.exports = {
  RecordGetController,
  RecordPostController,
  RecordEditController,
};
