const Note = require("../model/note.js");

const searchNoteByName = async (req, res, next) => {
    try {
        const { title } = req.query;

        if (!title) {
            return res.status(404).json({ message: "Title query parameter is required." });
        }

        const searchNote = await Note.find({ title: new RegExp(title, 'i')});

        res.status(200).json(searchNote);

    } catch (error) {
        next(error);
    }
};

module.exports = searchNoteByName;