const express = require("express");
const router = express.Router();
const chalk = require("chalk"); // menjanje boje u terminalu
const authToken = require("../middlewares/authentication.js");

const {
  RecordGetController,
  RecordPostController,
} = require("../controllers/recordController");

const [recordGetControl, recordPostControl] = [
  new RecordGetController(),
  new RecordPostController(),
];

//router.get("/records", recordGetControl.GetRecordsControl);
router.get("/records/:id", authToken, recordGetControl.GetRecordById);

router
  .route("/records")
  .get(authToken, recordGetControl.GetRecordsControl)
  .post(authToken, recordPostControl.CreateNewRecord);

module.exports = router;
