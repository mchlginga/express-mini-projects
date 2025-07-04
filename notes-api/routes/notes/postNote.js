const {
    ensureNoteFile, 
    parseNotes,
    normalizeTitle
} = require("../../lib/index.js");

// POST /notes
const postNote = async (req, res, next) => {
    try {
        await ensureNoteFile();
        const notes = await parseNotes();
        const {title, body} = req.body;

        // check existed notes with matching title
        const matchedNote = notes.find(note => normalizeTitle(note.title) === title);
        if (matchedNote) {
            return res.status(200).json({message: "Note already exist"});
        }
    } catch (error) {
        next(error);
    }
};

module.exports = postNote;