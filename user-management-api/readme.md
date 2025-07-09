# Simple User Management API

This project is a minimal yet powerful RESTful API built using Express.js and Node.js core modules — no database yet. It simulates a real-world user management backend using file-based storage (users.json). A perfect training ground before diving into MongoDB.

---

## Features

- Register new users (POST /users)
- View all users (GET /users)
- View single user by ID (GET /users/:id)
- Update user name/email (PUT /users/:id)
- Delete a user (DELETE /users/:id)
- Search by name using query param (GET /users/search?name=kel)

---

## Quick Start

- Clone the repository
- Install dependencies: npm install
- API will be available at: http://localhost:3000

---

## Example Usage

bash:

# 1. Register a new user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com"}'

# 2. Get all users
curl http://localhost:3000/api/users

# 3. Get single user by ID
curl http://localhost:3000/api/users/1

# 4. Update user name/email
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "John Smith", "email": "johnsmith@example.com"}'

# 5. Delete a user
curl -X DELETE http://localhost:3000/api/users/1

# 6. Search users by name
curl http://localhost:3000/api/users/search?name=john


---

# Tech Stack

1. Node.js - Runtime environment
2. Express.js - Web framework
3. File System - JSON file storage
4. No external database - Pure Node.js learning experience

