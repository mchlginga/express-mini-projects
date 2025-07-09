const {validationResult} = require("express-validator");
const {getDB} = require("../lib/index.js");


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

        const db = getDB();
        const users = db.collection("users");
        const {name, email, password} = req.body;

        // inser user
        const result = await users.insertOne({ name, email, password });

        res.status(201).json({ 
            message: "Added successfully!",
            id: result.insertedId
        })

    } catch (error) {
        next(error);
    }
};

module.exports = postUser;