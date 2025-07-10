const postNote = require("./postNote.js");
const getNotes = require("./getNotes.js");
const getNoteById = require("./getNoteById.js");
const putNote = require("./putNote.js");
const searchNoteByTitle = require("./searchNoteByTitle.js");
const deleteNote = require("./deleteNote.js");

module.exports = {
    postNote,
    getNotes,
    getNoteById,
    putNote,
    searchNoteByTitle,
    deleteNote
};