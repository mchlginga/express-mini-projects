const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const {PATHS} = require("./lib/index.js");
const usersRouter = require("./routes/users.js");

app = express();

app.set("json spaces", 2);

app.use(helmet());
app.use(cors());
app.use(express.json());

// morgan logger
const accessLogStream = fs.createWriteStream(path.join(PATHS.logFile), {flags: 'a'});
app.use(morgan("combined", {stream: accessLogStream}));

if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"));
}

// users routes
app.use("/api/users", usersRouter);

// if route not found
app.use( (req, res) => {
    res.status(404).json({error: "Route not found."});
});

module.exports = app;