const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB via Mongoose");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
};

module.exports = connectDB;