const fs = require("fs/promises");
const path = require("path");

const {PATHS} = require("./constants.js");

const ensureUsersFile = async () => {
    try {
        await fs.access(PATHS.usersFile);
    } catch (error) {
        await fs.mkdir(path.dirname(PATHS.usersFile), {recursive: true});
        await fs.writeFile(PATHS.usersFile, "[]");
    }
};

module.exports = ensureUsersFile;