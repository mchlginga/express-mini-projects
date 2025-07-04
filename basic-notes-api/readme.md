# Routing

Define different HTTP routes for different type of operations (CRUD). Basically just like the routes before with vanilla node.js:

1. GET - get notes
2. POST - create note
3. PUT - update note
4. DELETE - delete note

All via expressive routes like /notes and /notes/:id

---

## Flow

1. Use app.get, app.post, etc. to define routes
2. Access req.params, req.query, and req.body
3. Send back JSON responses via res.json()

To run req.body, we need to insert a middleware:

app.use(express.json()) - to parse JSON automatically

