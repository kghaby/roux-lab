import React, { useState } from "react";
import { Link } from "gatsby";
import "./header.css";

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      setMenuOpen(!menuOpen);
    }
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <Link to="/" className="site-title">
              {siteTitle}
            </Link>
          </div>
          <div
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '>' : '<'}
          </div>
        </div>
      </header>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/members">Members</Link></li>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/methods">Methods</Link></li>
          <li><Link to="/publications">Publications</Link></li>
          <li><Link to="/openings">Openings</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/tools">Tools</Link></li>
          <li><Link to="/useful-links">Useful Links</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;

