const {getDB} = require("../lib/index.js");

const getUsers = async (req, res, next) => {
    try {
        const db = getDB();
        const users = db.collection("users");
        const allUsers = await users.find().toArray();

        res.status(200).json(allUsers);
    } catch (error) {
        next(error);
    }
};

module.exports = getUsers;