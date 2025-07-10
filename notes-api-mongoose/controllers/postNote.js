const Note = require("../model/note.js");

const postNote = async (req, res, next) => {
    try {
        const {title, body} = req.body;

        const newNote = await Note.create({title, body});

        res.status(201).json({
            message: "Note added successfully",
            note: newNote
        });

    } catch (error) {
        next(error);
    }
};

module.exports = postNote;