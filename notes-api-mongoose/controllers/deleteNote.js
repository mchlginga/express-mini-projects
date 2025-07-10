const Note = require("../model/note.js");

const deleteNote = async (req, res, next) => {
    try {
        const { id } = req.params;

        const deletedNote = await Note.findByIdAndDelete(id);

        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found." });
        }

        res.status(200).json({ message: "Note deleted successfully." });

    } catch (error) {
        next(error);
    }
};

module.exports = deleteNote;