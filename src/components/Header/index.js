import React from 'react';
// import Nav from '../Nav';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <section className="header-section">
      <div className="header">
          <h1>Janetta Turner</h1>
      </div>
      <nav className="nav">
        <ul>
          <Link to="/">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/portfolio">
            <li>Portfolio</li>
          </Link>
          <Link to="/resume">
            <li>Resume</li>
          </Link>
        </ul>
      </nav>
    </section>
  );
}

export default Header;