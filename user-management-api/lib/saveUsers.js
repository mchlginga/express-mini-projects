const fs = require("fs/promises");

const {PATHS} = require("./constants.js")

const saveUsers = async (users) => {
    try {
        await fs.writeFile(PATHS.usersFile, JSON.stringify(users, null, 2));
    } catch (error) {
        console.error("Failed to save users data:", error);
    }
};

module.exports = saveUsers;