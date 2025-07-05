const fs = require("fs/promises");

const {
    ensureNoteFile,
    parseNotes,
    PATHS
} = require("../../lib/index.js");

const putNote = async (req, res, next) => {
    try {
        await ensureNoteFile();
        const notes = await parseNotes();
        const {title, body} = req.body;
        const {id} = req.params;

        // check existing note with matching id
        const matchedNote = notes.find(note => note.id === Number(id));
        if (!matchedNote) {
            return res.status(404).json({error: "Note not found."});
        }

        // update note
        matchedNote.title = title || matchedNote.title;
        matchedNote.body = body || matchedNote.body;
        await fs.writeFile(PATHS.notesFile, JSON.stringify(notes, null, 2));

        res.status(200).json(matchedNote);
    } catch (error) {
        next(error);
    }
};

module.exports = putNote;