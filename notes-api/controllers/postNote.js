const fs = require("fs/promises");
const {validationResult} = require("express-validator");

const {
    ensureNoteFile, 
    parseNotes,
    normalizeTitle,
    PATHS
} = require("../lib/index.js");

// POST /notes
const postNote = async (req, res, next) => {
    try {
        // validate result
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({
                message: "Validation failed.",
                error: errors.array()
            });
        }

        await ensureNoteFile();
        const notes = await parseNotes();
        const {title, body} = req.body;

        // check existed notes with matching title
        const matchedNote = notes.find(note => normalizeTitle(note.title) === normalizeTitle(title));
        if (matchedNote) {
            return res.status(200).json({message: "Note already exist"});
        }

        // create note
        const newNote = {
            id: Date.now(),
            title,
            body
        };

        notes.push(newNote);
        await fs.writeFile(PATHS.notesFile, JSON.stringify(notes, null, 2));

        res.status(201).json(notes);
    } catch (error) {
        next(error);
    }
};

module.exports = postNote;