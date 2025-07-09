const fs = require("fs/promises");

const {validationResult} = require("express-validator");
const {
    ensureUsersFile,
    parseUsersFile,
    saveUsers
} = require("../lib/index.js");


const postUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        // validation
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Validation failed.",
                error: errors.array()
            });
        }

        await ensureUsersFile();
        const users = await parseUsersFile();
        const {name, email, password} = req.body;

        // create user
        const newUser = {
            id: Date.now(),
            name,
            email,
            password
        };

        users.push(newUser);
        await saveUsers(users);

        res.status(201).json(newUser);

    } catch (error) {
        next(error);
    }
};

module.exports = postUser;