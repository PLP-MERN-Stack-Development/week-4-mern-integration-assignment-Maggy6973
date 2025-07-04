import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import SinglePost from './components/SinglePost';
import PostForm from './components/PostForm';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/posts/:id" element={<SinglePost />} />
            <Route path="/create" element={<PostForm />} />
            <Route path="/edit/:id" element={<PostForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App
