# User Management API with MongoDB

This project is a RESTful API built using Express.js and Node.js, now enhanced with MongoDB integration. Originally built with file-based storage (users.json), this version demonstrates the transition from simple file operations to proper database management using MongoDB and Mongoose.

---

## Current Status

**IN PROGRESS:** Migrating from file-based storage to MongoDB integration

- **Completed:** Express.js REST API with file storage
- **In Progress:** MongoDB & Mongoose integration
- **Next:** Database connection, models, and CRUD operations

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
- Install dependencies: `npm install`
- **[Coming Soon]** Configure MongoDB connection
- API will be available at: http://localhost:3000

---

## Example Usage

```bash
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
```

---

## Tech Stack

**Current:**
- Node.js - Runtime environment
- Express.js - Web framework
- File System - JSON file storage (legacy)

**Integrating:**
- MongoDB - NoSQL database
- Mongoose - MongoDB object modeling
- MongoDB Atlas - Cloud database hosting

---

## Learning Journey

This project demonstrates the evolution from:
- **File-based storage** → **Database management**
- **Synchronous operations** → **Asynchronous database queries**
- **Manual data handling** → **Schema validation & modeling**

Perfect for understanding the transition from simple file operations to production-ready database integration.