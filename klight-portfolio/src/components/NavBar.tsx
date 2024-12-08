import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navBar.css';

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="brand">
        {/* SVG Logo */}
        <svg className="logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 71">
          <rect x="6" y="10" width="35" height="52" className="logo-rect"></rect>
          <path
            d="M0 0V70.338H89.521V0H0ZM19.184 53.481L12.79 47.085L19.184 40.691L25.578 34.2971C25.578 34.2971 21.681 30.4 19.184 27.903C16.687 25.406 12.79 21.509 12.79 21.509L15.987 18.3115L19.184 15.114L28.7755 24.7055L38.367 34.2971L28.7755 43.889L19.184 53.481Z"
            className="logo-path"
          ></path>
          <rect x="45" y="44" width="29" height="8" className="logo-blink"></rect>
        </svg>
        <span className="kenny">Kenny</span> <span className="light">Light</span>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className={`hamburger-icon ${menuOpen ? 'open' : ''}`}></span>
      </button>
      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active-link' : ''} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''} onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active-link' : ''} onClick={() => setMenuOpen(false)}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/resume" className={location.pathname === '/resume' ? 'active-link' : ''} onClick={() => setMenuOpen(false)}>
            Resume
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;