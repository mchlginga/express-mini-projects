const {
    ensureUsersFile,
    parseUsersFile
} = require("../lib/index.js");

const getUserById = async (req, res, next) => {
    try {
        await ensureUsersFile();
        const users = await parseUsersFile();
        const {id} = req.params;

        // get user with matching id
        const user = users.find(usr => usr.id === Number(id));
        if (!user) {
            return res.status(404).json({error: "User not found."});
        }

        const foundUser = {
            id: user.id,
            name: user.name,
            email: user.email,
        };

        res.status(200).json(foundUser);

    } catch (error) {
        next(error);
    }
};

module.exports = getUserById;