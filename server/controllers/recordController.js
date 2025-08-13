const chalk = require("chalk"); // menjanje boje u terminalu

const { RecordGetModel, RecordPostModel } = require("../models/recordModel.js");
/* const [recordGetInstance, recordPostInstance] = [
  new RecordGetModel(),
  new RecordPostModel(),
]; */
const recordGetInstance = new RecordGetModel();
const recordPostInstance = new RecordPostModel();

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

    if (title === "" || text === "") {
      console.error(
        chalk.red("You cannot submit with title or text empty field. \n")
      );
      return res.status(400).json({
        message: "You cannot submit with title or text empty field. \n",
        titleMessage: title,
        textMessage: text,
      });
    }
    const newRecord = recordPostInstance.CreateNewRecord(title, text);
    return res.json({
      message: "Added successfuly",
      record: newRecord,
    });
  }
}

module.exports = { RecordGetController, RecordPostController };
