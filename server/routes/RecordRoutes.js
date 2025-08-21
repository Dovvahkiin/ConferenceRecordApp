const express = require("express");
const router = express.Router();
const authToken = require("../middlewares/authentication.js");
const authorization = require("../middlewares/authorization.js");

const {
  RecordGetController,
  RecordPostController,
} = require("../controllers/recordController");

const [recordGetControl, recordPostControl] = [
  new RecordGetController(),
  new RecordPostController(),
];

router.get("/posts/:id", authToken, recordGetControl.GetRecordById); // record page[id]

router.get("/home", authToken, recordGetControl.GetRecordsControl); // homepage get all records

router.post(
  "/newpost",
  authToken,
  authorization("admin", "moderator"),
  recordPostControl.CreateNewRecord
); // post a new record (add moderator/admin authorization)

module.exports = router;
