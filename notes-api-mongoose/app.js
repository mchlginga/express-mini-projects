const express = require("express");
const helmet = require("helmet")
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");


const notesRouter = require("./routes/notes.js");
const {PATHS} = require("./lib/constant.js");

app = express();
app.set("json spaces", 2);

app.use(helmet());
app.use(express.json());

// morgan log
const accessLogStream = fs.createWriteStream(path.join(PATHS.logFile), {flags: 'a'});
app.use(morgan ("combined", {stream: accessLogStream}));

if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"));
}

// notes routes
app.use("/api/notes", notesRouter);

app.use( (req, res, next) => {
    res.status(404).json( {message: "Route not found."});
});

module.exports = app;