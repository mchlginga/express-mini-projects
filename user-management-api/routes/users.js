const express = require("express");
const router = express.Router();

const {
    postUser,
    getUsers,
    getUserById,
    putUser,
    deleteUser,
    searchUserByName
} = require("../controllers/usersController.js");
const validateUser = require("../middleware/validators.js");

router.post('/', validateUser, postUser);   // create user
router.get('/',getUsers);                   // view all users
router.get("/search", searchUserByName);    // search user by name
router.get("/:id", getUserById);            // view user by id
router.put("/:id", validateUser, putUser);  // update user by id
router.delete("/:id", deleteUser);          // delete user by id

module.exports = router;