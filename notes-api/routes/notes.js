const express = require("express");

const {
    getNotes,
    postNote
} = require("./notes/index.js");

const router = express.Router();

router.get('/', getNotes); // GET /notes
router.post('/', postNote); // POST /notes

module.exports = router;