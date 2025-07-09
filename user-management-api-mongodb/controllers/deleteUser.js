

const deleteUser = async (req, res, next) => {
    try {
        await ensureUsersFile();
        let users = await parseUsersFile();
        const {id} = req.params;
        const initialLength = users.length;

        // filter user with matching id
        users = users.filter(user => user.id !== Number(id));
        if (initialLength === users.length) {
            return res.status(404).json({error: "User not found."});
        }

        await saveUsers(users);
        res.status(200).json({message: "User deleted successfully."});

    } catch (error) {
        next(error);
    }
};

module.exports = deleteUser;