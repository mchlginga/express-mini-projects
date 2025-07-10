const Note = require("../model/note.js");

const putNote = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, body } = req.body;

        const updatedNote = await Note.findByIdAndUpdate(
            id,
            { title, body},
            { new: true, runValidators: true}
        );

        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found."});
        }

        res.status(200).json(updateNote);

    } catch (error) {
        next(error);
    }
};

module.exports = putNote;