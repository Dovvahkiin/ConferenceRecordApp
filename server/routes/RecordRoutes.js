const express = require("express");
const router = express.Router();
const authToken = require("../middlewares/authentication.js");
const authorization = require("../middlewares/authorization.js");

const {
  RecordGetController,
  RecordPostController,
  RecordEditController,
  RecordDeleteController,
} = require("../controllers/recordController");

const [
  recordGetControl,
  recordPostControl,
  RecordEditControl,
  RecordDeleteControl,
] = [
  new RecordGetController(),
  new RecordPostController(),
  new RecordEditController(),
  new RecordDeleteController(),
];
router
  .route("/posts/:id")
  .get(authToken, recordGetControl.GetRecordById)
  .put(
    authToken,
    authorization("admin", "moderator"),
    RecordEditControl.EditExistingRecord
  )
  .delete(
    authToken,
    authorization("admin", "moderator"),
    RecordDeleteControl.DeleteRecord
  ); // record page[id]

router.get("/home", authToken, recordGetControl.GetRecordsControl); // homepage get all records

router.post(
  "/newpost",
  authToken,
  authorization("admin", "moderator"),
  recordPostControl.CreateNewRecord
); // post a new record (add moderator/admin authorization)

module.exports = router;
