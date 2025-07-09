const fs = require("fs/promises");

const {PATHS} = require("./constants.js");

const parseUsersFile = async () => {
    try {
        return JSON.parse(await fs.readFile(PATHS.usersFile, "utf-8"));
    } catch (error) {
        console.error("Failed to parse users file:", error)
    }
};

module.exports = parseUsersFile;