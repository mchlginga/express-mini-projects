const path = require("path");

const PATHS = {
    dataDir: path.join(__dirname, "..", "data"),
    notesFile: path.join(__dirname, "..", "data", "notes.json"),
    logFile: path.join(__dirname, "..", "data", "access.log")
};

module.exports = {
    PATHS
};