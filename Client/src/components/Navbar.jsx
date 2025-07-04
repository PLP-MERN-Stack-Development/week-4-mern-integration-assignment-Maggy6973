import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          My Blog
        </Link>
        
        <div className="nav-links">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
          <Link 
            to="/create" 
            className={location.pathname === '/create' ? 'nav-link active' : 'nav-link'}
          >
            Create Post
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;