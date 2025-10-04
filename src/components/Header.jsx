import React from 'react';
import './Header.css';

const Header = ({ currentPage, onPageChange }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => onPageChange('home')}>
            <span className="logo-icon">🎓</span>
            <span className="logo-text">GrowTech</span>
          </div>
          
          <nav className="nav">
            <button 
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => onPageChange('home')}
            >
              Home
            </button>
            <button 
              className={`nav-link ${currentPage === 'courses' ? 'active' : ''}`}
              onClick={() => onPageChange('courses')}
            >
              Courses
            </button>
            <button 
              className={`nav-link ${currentPage === 'auth' ? 'active' : ''}`}
              onClick={() => onPageChange('auth')}
            >
              Login/Register
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;