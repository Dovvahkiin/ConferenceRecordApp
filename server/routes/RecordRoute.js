const express = require("express");
const router = express.Router();
const recordGetController = require("../controllers/recordController");

const recordGetControl = new recordGetController();

router.get("/records", recordGetControl.GetRecordsControl);
router.get("/records/:id", recordGetControl.GetRecordById);

module.exports = router;
