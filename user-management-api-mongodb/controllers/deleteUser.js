const {getDB} = require("../lib/index.js");
const {ObjectId} = require("mongodb");

const deleteUser = async (req, res, next) => {
    try {
        const db = getDB();
        const users = db.collection("users");
        const { id } = req.params;

        const result = await users.deleteOne({ _id: new ObjectId(id)});

        if (result === 0) {
            return res.status(404).json({ message: "User not found."});
        }

        res.status(200).json({ message: "User deleted successfully."});

    } catch (error) {
        next(error);
    }
};

module.exports = deleteUser;