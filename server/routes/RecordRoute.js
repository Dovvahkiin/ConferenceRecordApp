const express = require("express");
const router = express.Router();
const chalk = require("chalk"); // menjanje boje u terminalu

const {
  RecordGetController,
  RecordPostController,
} = require("../controllers/recordController");

const [recordGetControl, recordPostControl] = [
  new RecordGetController(),
  new RecordPostController(),
];

//router.get("/records", recordGetControl.GetRecordsControl);
router.get("/records/:id", recordGetControl.GetRecordById);

router
  .route("/records")
  .get(recordGetControl.GetRecordsControl)
  .post(recordPostControl.CreateNewRecord);

module.exports = router;
