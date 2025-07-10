const express = require("express");
const router = express.Router();

const {
    postNote,
    getNotes,
    getNoteById,
    putNote
} = require("../controllers/notesControllers.js");

router.post("/", postNote);
router.get("/", getNotes);
router.get("/:id", getNoteById);
router.put("/:id", putNote);

module.exports = router;