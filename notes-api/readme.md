# Notes REST API 

This project is a full rewrite of my previous vanilla Node.js version of a CRUD Notes API — now powered by Express.js for cleaner routing, better modularity, and easier scalability.

---

## Features

- Create a note (POST /api/notes)
- View all notes (GET /api/notes)
- Update note by ID (PUT /api/notes/:id)
- Delete note by ID (DELETE /api/notes/:id)

---

## What's New in Express Version

- **Input Validation** - express-validator for title/body validation
- **CORS Support** - Cross-origin requests enabled
- **Security Headers** - Helmet middleware for basic security
- **HTTP Logging** - Morgan for request/response logging
- **Error Handling** - Centralized error middleware
- **Modular Structure** - Separated routes, controllers, and libraries

---

## Quick Start

1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. API available at: `http://localhost:3000`

---

## Example Usage

bash:

1. Create a new note
curl -X POST http://localhost:3000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title": "My Note", "body": "This is my note content"}'

2. Get all notes
curl http://localhost:3000/api/notes

3. Update a note
curl -X PUT http://localhost:3000/api/notes/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Note", "body": "Updated content"}'

4. Delete a note
curl -X DELETE http://localhost:3000/api/notes/

---

## Tech Stack

1. Node.js - Runtime environment
2. Express.js - Web framework
3. File System - JSON file storage
4. No external database - Pure Node.js learning experience
5. Helmet - Security headers
6. Morgan - HTTP logging
7. express-validator - Input validation
8. CORS - Cross-origin support