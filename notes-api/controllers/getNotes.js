const {ensureNoteFile, parseNotes} = require("../lib/index.js");

// GET /notes
const getNotes = async (req, res, next) => {
    try {
        await ensureNoteFile();
    const notes = await parseNotes();

    // check if notes empty
    if (notes.length <= 0) {
        return res.status(200).json({message: "Notes is empty."});
    }

    res.status(200).json(notes);

    } catch (error) {
        next(error);
    }
};

module.exports = getNotes;

