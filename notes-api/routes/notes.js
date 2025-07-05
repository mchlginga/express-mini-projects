const express = require("express");

const {
    getNotes,
    postNote,
    putNote,
    deleteNote
} = require("../controllers/notesController.js");

const router = express.Router();

router.get('/', getNotes); // GET /notes
router.post('/', postNote); // POST /notes
router.put("/:id", putNote) // PUT /notes
router.delete("/:id", deleteNote); // DELETE /notes

module.exports = router;