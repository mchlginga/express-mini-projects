const path = require("path");

const PATHS = {
    logFile: path.join(__dirname, "..", "data", "access.log"),
    usersFile: path.join(__dirname, "..", "data", "users.json")
};

module.exports = {PATHS};