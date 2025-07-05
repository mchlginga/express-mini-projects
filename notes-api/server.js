const express = require("express");
const helmet = require("helmet");
const app = express();

const notesRouter = require("./routes/notes.js");
const logger = require("./middleware/logger.js");
const errorhandler = require("./middleware/errorhandler.js");
const config = require("./config/index.js");

app.use(helmet());

const port = config.port;
app.set("json spaces", 2);

app.use(express.json());
app.use(logger);

app.use("/api/notes", notesRouter); // routes

app.use(errorhandler);

app.use( (req, res) => {
    res.status(404).json({error: "Route not found"});
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

