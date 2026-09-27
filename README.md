# 🛠️ Node.js + Express + Neon Postgres CRUD API

A simple REST API to perform basic **CRUD operations** on a `users` table using:

- **Node.js** and **Express** for the backend  
- **Neon** (serverless PostgreSQL) for the database  

---

## 📦 Tech Stack

- Node.js  
- Express.js  
- Neon Postgres (`pg` driver)

---

## ⚡ Setup : Neon Postgres

1. Create a project at [neon.tech](https://neon.tech).
2. In the Neon console, click **Connect** and copy the connection string.
3. Copy `.env.example` to `.env` and set `DATABASE_URL` to that connection string (use `sslmode=verify-full`).
4. Install and run:
   ```bash
   npm install
   npm run dev
   ```
   The `users` table is created automatically on startup (see [`src/data/data.sql`](src/data/data.sql)).

---
## 📁 Folder Structure 

```
└── 📦 node_modules
└── 📁src
    └── 📁config
        └── db.js
    └── 📁controllers
        └── userController.js
    └── 📁data
        └── createUserTable.js
        └── 📄 data.sql
    └── 📁middlewares
        └── errorHandler.js
    └── 📁models
        └── userModel.js
    └── 📁routes
        └── userRoutes.js
    └── index.js
└── 📝 .env
└── 📝 .env.example
└── 📝 .gitignore
└── 📦 package-lock.json
└── 📦 package.json
```
---

## 📡 API Endpoints

### 📥 Create User  
**POST** `http://localhost:5001/api/user`  
**Request Body:**
```json
{
  "name": "zaid",
  "email": "zaid123@test.com"
}
```
**Response:**
```json
{
  "status": 201,
  "message": "User created successfully",
  "data": {
    "id": 6,
    "name": "zaid",
    "email": "zaid123@test.com",
    "created_at": "2025-05-29T11:06:52.025Z"
  }
}
```
---

### 🔍 Get User by ID  
**GET** `http://localhost:5001/api/user/1`  
**Response:**
```json
{
  "status": 201,
  "message": "User fetched successfully",
  "data": {
    "id": 1,
    "name": "Zaid",
    "email": "zaid@example.com",
    "created_at": "2025-05-28T13:27:03.963Z"
  }
}
```

---

### 📥 Create User  
**POST** `http://localhost:5001/api/user`  
**Request Body:**
```json
{
  "name": "zaid",
  "email": "zaid123@test.com"
}
```
**Response:**
```json
{
  "status": 201,
  "message": "User created successfully",
  "data": {
    "id": 6,
    "name": "zaid",
    "email": "zaid123@test.com",
    "created_at": "2025-05-29T11:06:52.025Z"
  }
}
```

---

### ✏️ Update User  
**PUT** `http://localhost:5001/api/user/4`  
**Request Body:**
```json
{
  "name": "zaid k",
  "email": "zaid12345@test.com"
}
```
**Response:**
```json
{
  "status": 201,
  "message": "User updated successfully",
  "data": {
    "id": 4,
    "name": "yoyo1",
    "email": "yoyo1@test.com",
    "created_at": "2025-05-29T11:00:49.696Z"
  }
}
```

---

### 🗑️ Delete User  
**DELETE** `http://localhost:5001/api/user/4`  
**Response:**
```json
{
  "status": 201,
  "message": "User deleted successfully",
  "data": {
    "id": 4,
    "name": "yoyo1",
    "email": "yoyo1@test.com",
    "created_at": "2025-05-29T11:00:49.696Z"
  }
}
```
## ❕ Note
This README serves as a reference for clean, modular folder structure and base CRUD operations for future development.
