

const searchUserByName = async (req, res, next) => {
    try {
        await ensureUsersFile();
        const users = await parseUsersFile();
        const {name} = req.query;

        // filter users with matching name
        const filter = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
        if (filter.length === 0) {
            return res.status(404).json({error: "User not found."});
        }

        res.status(200).json(filter);
    } catch (error) {
        next(error);
    }
};

module.exports = searchUserByName;