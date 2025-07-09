const fs = require("fs");
const path = require("path");

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const notesRouter = require("./routes/notes.js");
// const logger = require("./middleware/logger.js");
const errorhandler = require("./middleware/errorhandler.js");
const config = require("./config/index.js");
const {PATHS} = require("./lib/index.js");

app.use(helmet()); // basic security headers
app.use(cors());

const port = config.port;
app.set("json spaces", 2);

app.use(express.json());

// app.use(logger);
const accessLogStream = fs.createWriteStream(path.join(PATHS.logFile), {flags: 'a'});
app.use(morgan("combined", {stream: accessLogStream}));

if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"));
}

app.use("/api/notes", notesRouter); // routes

app.use(errorhandler);

app.use( (req, res) => {
    res.status(404).json({error: "Route not found"});
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

