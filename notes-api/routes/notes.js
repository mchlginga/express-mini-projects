const express = require("express");

const {
    getNotes,
    postNote,
    putNote
} = require("./notes/index.js");

const router = express.Router();

router.get('/', getNotes); // GET /notes
router.post('/', postNote); // POST /notes
router.put("/:id", putNote) // PUT /notes

module.exports = router;