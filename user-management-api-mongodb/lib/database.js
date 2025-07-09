const {MongoClient} = require("mongodb");

let client;
let db;

const connectDB = async () => {
    try {
        client = new MongoClient(process.env.MONGO_URI);
        await client.connect();
        db = client.db("usersDB");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
};

const getDB = () => {
    if (!db) {
        throw new Error ("Database not connected");
    };

    return db;
}

module.exports = {connectDB, getDB};