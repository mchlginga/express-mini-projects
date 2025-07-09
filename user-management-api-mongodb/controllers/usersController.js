const postUser = require("./postUser.js");
const getUsers = require("./getUsers.js");
const getUserById = require("./getUserById.js");
const putUser = require("./putUser.js");
const deleteUser = require("./deleteUser.js");
const searchUserByName = require("./searchUserByName.js");

module.exports = {
    postUser,
    getUsers,
    getUserById,
    putUser,
    deleteUser,
    searchUserByName
};