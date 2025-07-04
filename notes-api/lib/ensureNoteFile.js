const fs = require("fs/promises");
const path = require("path");

const {PATHS} = require("./config.js");

const ensureNoteFile = async () => {
    try {
        await fs.access(PATHS.notesFile);
    } catch (error) {
        await fs.mkdir(path.dirname(PATHS.notesFile), {recursive: true});
        await fs.writeFile(PATHS.notesFile, "[]");
    }
};

module.exports = ensureNoteFile;