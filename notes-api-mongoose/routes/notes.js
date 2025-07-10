const express = require("express");
const router = express.Router();

const {
    postNote,
    getNotes
} = require("../controllers/notesControllers.js");

router.post("/", postNote);
router.get("/", getNotes);

module.exports = router;