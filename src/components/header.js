import React, { useState } from "react";
import { Link } from "gatsby";
import "./header.css";

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" style={{ fontSize: `var(--font-sm)`, textDecoration: `none` }}>
            {siteTitle}
          </Link>
        </div>
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
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
