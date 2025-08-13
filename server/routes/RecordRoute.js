const express = require("express");
const router = express.Router();
const {
  RecordGetController,
  RecordPostController,
} = require("../controllers/recordController");

const recordGetControl = new RecordGetController();
const recordPostControl = new RecordPostController();

//router.get("/records", recordGetControl.GetRecordsControl);
router.get("/records/:id", recordGetControl.GetRecordById);

router
  .route("/records")
  .get(recordGetControl.GetRecordsControl)
  .post(recordPostControl.CreateNewRecord);

module.exports = router;
