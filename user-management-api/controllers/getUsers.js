const {
    ensureUsersFile,
    parseUsersFile
} = require("../lib/index.js");

const getUsers = async (req, res, next) => {
    try {
        await ensureUsersFile();
        const users = await parseUsersFile();

        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

module.exports = getUsers;