<<<<<<< HEAD
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
=======
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19893908&assignment_repo_type=AssignmentRepo)
# MERN Stack Integration Assignment

This assignment focuses on building a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that demonstrates seamless integration between front-end and back-end components.

## Assignment Overview

You will build a blog application with the following features:
1. RESTful API with Express.js and MongoDB
2. React front-end with component architecture
3. Full CRUD functionality for blog posts
4. User authentication and authorization
5. Advanced features like image uploads and comments

## Project Structure

```
mern-blog/
├── client/                 # React front-end
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   ├── context/        # React context providers
│   │   └── App.jsx         # Main application component
│   └── package.json        # Client dependencies
├── server/                 # Express.js back-end
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── utils/              # Utility functions
│   ├── server.js           # Main server file
│   └── package.json        # Server dependencies
└── README.md               # Project documentation
```

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Follow the setup instructions in the `Week4-Assignment.md` file
4. Complete the tasks outlined in the assignment

## Files Included

- `Week4-Assignment.md`: Detailed assignment instructions
- Starter code for both client and server:
  - Basic project structure
  - Configuration files
  - Sample models and components

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- npm or yarn
- Git

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete both the client and server portions of the application
2. Implement all required API endpoints
3. Create the necessary React components and hooks
4. Document your API and setup process in the README.md
5. Include screenshots of your working application

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Mongoose Documentation](https://mongoosejs.com/docs/) 
>>>>>>> b86bbd128ebd0067ab95d8cf13e9b5d79e9a5cd4
