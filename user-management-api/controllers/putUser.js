const {validationResult} = require("express-validator");

const {
    ensureUsersFile,
    parseUsersFile,
    saveUsers
} = require("../lib/index.js");

const putUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        // validation
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Validation failed",
                error: errors.array()
            });
        }
    
        await ensureUsersFile();
        const users = await parseUsersFile();
        const initialLength = users.length;
        const {id} = req.params;
        const {name, email, password} = req.body;

        // find users with matching id
        const user = users.find(usr => usr.id === Number(id));
        if (!user) {
            return res.status(404).json({error: "User not found."});
        }

        // update user information
        user.name = name || user.name;
        user.email = email || user.email;
        user.password = password || user.password;

        await saveUsers(users);

        res.status(200).json({message: "User updated successfully!"});

    } catch (error) {
        next(error);
    }
};

module.exports = putUser;