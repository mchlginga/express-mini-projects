const {body} = require("express-validator");

const validateUsers = [
    body("name")
        .notEmpty()
        .withMessage("Name is required.")
        .isLength({min: 2, max: 50})
        .withMessage("Name must be between 2 and 50 characters.")
        .trim(),
    body("email")
        .notEmpty()
        .withMessage("Email is required.")
        .isEmail()
        .withMessage("Please provide a valid email address.")
        .normalizeEmail(),
    body("password")
        .notEmpty()
        .withMessage("Password is required.")
        .isLength({min: 6, max: 50})
        .withMessage("Password must be between 6 to 50 characters.")
];

module.exports = validateUsers;