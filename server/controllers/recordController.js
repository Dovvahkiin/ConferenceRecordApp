const chalk = require("chalk"); // menjanje boje u terminalu

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
  CreateNewRecord(req, res) {
    const { title, text } = req.body;
    const errorMessage = "You cannot submit with empty fields. \n";

    if (title === "" || text === "") {
      console.error("\nReturn message: " + chalk.red(errorMessage));
      return res.status(400).json({
        errorMessage,
        titleInput: title,
        textInput: text,
      });
    }
    const newRecord = recordPostInstance.CreateNewRecord(title, text);
    return res.json({
      temporaryMessage: "Added successfuly",
      record: newRecord,
    });
  }
}

class RecordEditController {
  async EditExistingRecord(req, res) {
    const { title, text } = req.body;
    const id = parseInt(req.params.id, 10);
    try {
      const editRecord = await recordEditInstance.EditExistingRecord(
        id,
        title,
        text
      );
      if (!editRecord) {
        console.log("Record not found");
        res.status(404).json({ errMsg: "Record is not found!" });
      } else return res.json({ result: editRecord[0] });
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
