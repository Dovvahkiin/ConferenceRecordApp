const chalk = require("chalk"); // menjanje boje u terminalu

const { RecordGetModel, RecordPostModel } = require("../models/recordModel.js");
const [recordGetInstance, recordPostInstance] = [
  new RecordGetModel(),
  new RecordPostModel(),
];
/* const recordGetInstance = new RecordGetModel();
const recordPostInstance = new RecordPostModel(); */

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

module.exports = { RecordGetController, RecordPostController };
