import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/logo-image.png" alt="Rekyl Logo" />
          </Link>
        </div>

        <button 
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Menu</span>
          {/* Add your menu icon here */}
        </button>

        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
          <Link to="/market" className={location.pathname === '/market' ? 'active' : ''}>
            Market
          </Link>
          {/* <Link to="/sell" className={location.pathname === '/sell' ? 'active' : ''}>
            Sell
          </Link> */}
          <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>
            Login
          </Link>
        </div>

        <div className="navbar-user">
        <Link to="/dashboard">
          <img src="/user-icon.png" alt="User Profile" />
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;