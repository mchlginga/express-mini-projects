const express = require("express");
const router = express.Router();

const ensureNoteFile = require("../lib/ensureNoteFile.js");
const parseNotes = require("../lib/parseNotes.js");

router.get('/', async (req, res) => {
    await ensureNoteFile();
    const notes = await parseNotes();

    // check if notes empty
    if (notes.length <= 0) {
        return res.status(200).json({message: "Notes is empty."});
    }

    res.status(200).json(notes, null, 2);
});

module.exports = router;