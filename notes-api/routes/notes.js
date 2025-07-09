const express = require("express");

const {
    getNotes,
    postNote,
    putNote,
    deleteNote
} = require("../controllers/notesController.js");
const validateNote = require("../middleware/validators.js");

const router = express.Router();

router.get('/', getNotes); // GET /notes
router.post('/', validateNote, postNote); // POST /notes
router.put("/:id", validateNote, putNote) // PUT /notes
router.delete("/:id", deleteNote); // DELETE /notes

module.exports = router;