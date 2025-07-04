const express = require("express");

const {getNotes} = require("./notes/index.js");

const router = express.Router();

router.get('/', getNotes); // GET /notes
// router.post('/');

module.exports = router;