const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // to read req.body

let notes = [];

// GET /notes
app.get("/notes", (req, res) => {
    res.status(200).json(notes) // just like writeHeader and stringfy on vanilla js before
});


// POST /notes
app.post("/notes", (req, res) => {
    const {title, body} = req.body; // object destructuring {}, req.body is parsed data coming from user thanks to express.json

    // create note
    const newNote = {
        id: Date.now(),
        title,
        body
    };

    notes.push(newNote);

    res.status(201).json(newNote);
});

// PUT /notes
app.put("/notes/:id", (req, res) => {
    const {id} = req.params; // parameter sa url which :id
    const {title, body} = req.body;

    // check existing note with matching id
    const matchedNote = notes.find(note => note.id === Number(id)); // Number() since it's a form of string coming from url
    if (!matchedNote) {
        return res.status(404).json({error: "Note not found."});
    }

    // update note values
    matchedNote.title = title || matchedNote.title;
    matchedNote.body = body || matchedNote.body;

    res.status(200).json(matchedNote);

});

// DELETE /notes
app.delete("/notes/:id", (req, res) => {
    const {id} = req.params;
    const initialLength = notes.length;

    // check existing note with matching id
    notes = notes.filter(note => note.id !== Number(id));
    if (notes.length === initialLength) {
        return res.status(404).json({error: "Note not found"});
    }

    res.status(200).json({message: "Note successfully deleted."});
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});