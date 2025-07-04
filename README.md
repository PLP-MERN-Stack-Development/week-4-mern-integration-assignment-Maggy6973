# MY PROJECT STRUCTURE

wk4_mern/
├── Client/                        # React frontend (Vite)
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   │   └── vite.svg
│   ├── README.md
│   ├── src/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── assets/
│   │   │   └── react.svg
│   │   ├── components/
│   │   │   ├── Comments.jsx
│   │   │   ├── ImageUpload.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Pagination.jsx
│   │   │   ├── PostForm.jsx
│   │   │   ├── PostList.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── SinglePost.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── hooks/
│   │   │   └── useApi.js
│   │   ├── index.css
│   │   └── main.jsx
│   └── vite.config.js
├── server/                        # Node.js/Express backend
│   ├── .env
│   ├── db/
│   │   └── db.js
│   ├── index.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── Category.js
│   │   ├── Post.js
│   │   └── User.js
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   └── routes/
│       ├── auth.js
│       ├── categories.js
│       └── posts.js

# 📝 MERN Blog Post Project

## 📖 Overview
This is a simple blog post application built with the **MERN stack** (MongoDB, Express, React, Node.js). Users can create, view, edit, and delete blog posts. Each post belongs to a category, and new categories can be added on the fly.

---

## ⚛️ Frontend (Client)

Built with **React** and **Vite**.

### ✨ Features
- View all blog posts
- Create a new post (title, content, author, category)
- Add a new category directly from the post form
- Edit or delete existing posts
- Dropdown to select category (add one if none exist)
- API calls handle all communication with the backend

---

## 🧰 Backend (Server)

Built with **Node.js**, **Express**, and **MongoDB** using **Mongoose**.

### ⚙️ Functionality
- REST API endpoints for posts, categories, and authentication
- Data validation and error handling
- Stores posts and categories in MongoDB

---

## 💾 Data Storage

- Post creation: Sends form data to backend via API
- Backend saves post to MongoDB `posts` collection
- Categories are saved in a separate `categories` collection
- Each post references its category by ID
- Data is persisted in the database

---

## 🚀 Getting Started

### 🔧 Install Dependencies
```bash
# Client
npm install

# Server
npm install

## 🛠️ Setup Environment Variables

Create a `.env` file in the root of your backend directory and configure the following:

```env
MONGODB_URI=your_mongodb_connection_string
# Add other environment variables here as needed

## Run the backend

npm start
# or
nodemon index.js

## Run the frontend

npm run dev

## Open the app 

 Go to http://localhost:5173 (or the port Vite shows) in your browser.