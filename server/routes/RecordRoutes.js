const express = require("express");
const router = express.Router();
const authToken = require("../middlewares/authentication.js");
const authorization = require("../middlewares/authorization.js");

const {
  RecordGetController,
  RecordPostController,
  RecordEditController,
} = require("../controllers/recordController");

const [recordGetControl, recordPostControl, RecordEditControl] = [
  new RecordGetController(),
  new RecordPostController(),
  new RecordEditController(),
];
router
  .route("/posts/:id")
  .get(authToken, recordGetControl.GetRecordById)
  .put(
    authToken,
    authorization("admin", "moderator"),
    RecordEditControl.EditExistingRecord
  ); // record page[id]

router.get("/home", authToken, recordGetControl.GetRecordsControl); // homepage get all records

router.post(
  "/newpost",
  authToken,
  authorization("admin", "moderator"),
  recordPostControl.CreateNewRecord
); // post a new record (add moderator/admin authorization)

module.exports = router;
