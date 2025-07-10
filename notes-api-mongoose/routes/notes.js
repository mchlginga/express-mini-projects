const express = require("express");
const router = express.Router();

const {
    postNote
} = require("../controllers/notesControllers.js");

router.post("/", postNote);

module.exports = router;