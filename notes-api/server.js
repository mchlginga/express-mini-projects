const express = require("express");
const app = express();
const port = 3000;

const notesRouter = require("./routes/notes.js");

app.set('json spaces', 2);
app.use(express.json());

app.use("/notes", notesRouter); // routes

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

