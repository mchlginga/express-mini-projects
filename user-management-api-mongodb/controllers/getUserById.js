const {getDB} = require("../lib/index.js");
const {ObjectId} = require("mongodb");

const getUserById = async (req, res, next) => {
    try {
        const db = getDB();
        const users = db.collection("users");
        const {id} = req.params;

        // get user with matching ObjectId
        const user = await users.findOne({_id: new ObjectId(id)});
        if (!user) {
            return res.status(404).json({ message: "User not found"});
        }

        res.status(200).json(user);

    } catch (error) {
        next(error);
    }
};

module.exports = getUserById;