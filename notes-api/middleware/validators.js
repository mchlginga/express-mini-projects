const {body} = require("express-validator");

const validateNote = [
    body("title")
        .notEmpty()
        .withMessage("Title is required.")
        .isLength({min: 1, max: 100})
        .withMessage("Title must between 1 to 100 characters")
        .trim(),
    body("body")
        .notEmpty()
        .withMessage("Content is required")
        .isLength({min: 1, max: 1000})
        .withMessage("Body must between 1 to 1000 characters")
];

module.exports = validateNote;