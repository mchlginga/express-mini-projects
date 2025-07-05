const express = require("express");
const app = express();
const port = 3000;

const notesRouter = require("./routes/notes.js");
const logger = require("./middleware/logger.js");
const errorhandler = require("./middleware/errorhandler.js");

app.set("json spaces", 2);

app.use(express.json());
app.use(logger);

app.use("/notes", notesRouter); // routes

app.use(errorhandler);

app.use( (req, res) => {
    res.status(404).json({error: "Route not found"});
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

