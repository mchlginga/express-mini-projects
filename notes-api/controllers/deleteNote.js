const fs = require("fs/promises");

const {
    ensureNoteFile,
    parseNotes,
    PATHS
} = require("../lib/index.js");

const deleteNote = async (req, res, next) => {
    try {
        await ensureNoteFile();
        let notes = await parseNotes();
        const {id} = req.params;
        const initialLength = notes.length;

        // check exisiting note by filtering id
        notes = notes.filter(note => note.id !== Number(id));
        if (initialLength === notes.length) {
            return res.status(404).json({message: "Note not found"});
        }

        // updated note after the deletion
        await fs.writeFile(PATHS.notesFile, JSON.stringify(notes, null, 2));
        res.status(200).json({message: "Note successfully deleted."});
    } catch (error) {
        next(error);
    }
};

module.exports = deleteNote;