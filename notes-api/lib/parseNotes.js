const fs = require("fs/promises");

const {PATHS} = require("./config.js");

const parseNotes = async () => {
    try {
        return JSON.parse(await fs.readFile(PATHS.notesFile, "utf-8"));
    } catch (error) {
        console.log("Failed to parse note:", error.message);
    }
};

module.exports = parseNotes;