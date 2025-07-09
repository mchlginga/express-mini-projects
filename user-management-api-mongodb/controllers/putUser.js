const {validationResult} = require("express-validator");
const {getDB} = require("../lib/index.js");
const {ObjectId} = require("mongodb");

const putUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        // validation
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Validation failed",
                error: errors.array()
            });
        }

        const db = getDB();
        const users = db.collection("user");
        const {id} = req.params;
        const {name, email, password} = req.body;

        const result = await users.updateOne(
            { _id: new ObjectId(id) },
            { $set: {name, email, password} }
        );

        // chech if result matched user
        if (result.matchedCount === 0) {
            return res.status(404).json({message: "User not found."});
        }

        res.status(200).json({message: "User updated successfully!"});


    } catch (error) {
        next(error);
    }
};

module.exports = putUser;