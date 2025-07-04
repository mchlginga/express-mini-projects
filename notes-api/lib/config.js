const path = require("path");

const PATHS = {
    dataDir: path.join(__dirname, "..", "data"),
    notesFile: path.join(__dirname, "..", "data", "notes.json")
};

module.exports = {
    PATHS
};