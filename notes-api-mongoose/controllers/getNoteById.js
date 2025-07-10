const Note = require("../model/note.js");

const getNoteById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const note = await Note.findById(id);

        if (!note) {
            return res.status(404).json({ message: "Note not found."});
        }

        res.status(200).json(note);
    } catch (error) {
        next(error);
    }
};

module.exports = getNoteById;