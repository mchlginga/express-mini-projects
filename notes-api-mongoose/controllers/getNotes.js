const User = require("../model/note.js");

const getNotes = async (req, res, next) => {
    try {
        const allUser = await User.find();
        res.status(200).json(allUser);
    } catch (error) {
        next(error);
    }
};

module.exports = getNotes;