import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar({ time, toggleTime }) {
  const location = useLocation();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setShowBanner(false);
    }
  }, [location]);

  return (
    <>
      <nav className={`navbar ${time}-mode`}>
        <div className="logo-section">
          <span className="logo-icon" role="img" aria-label="store">🏬</span>
          <span className="logo-text">Dukaan</span>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/create" className="nav-link">Show My Work</Link>
          <Link to="/login" className="nav-link">Add Items</Link>
        </div>
        <button
          className="toggle-icon"
          onClick={toggleTime}
          aria-label="Toggle day/night mode"
        >
          {time === 'day' ? '🌙' : '☀️'}
        </button>
      </nav>
      {showBanner && (
        <div className="home-banner">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg" 
            alt="Cristiano Ronaldo" 
            className="ronaldo-img" 
          />
          <h1 className="animated-text hindi-text">
            If you want to add something in Dukaan go to "Add Items" section and add things there — don't waste time.
          </h1>
        </div>
      )}
    </>
  );
}

export default Navbar;

