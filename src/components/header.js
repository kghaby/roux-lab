import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import Nav from "./nav.js";
import "./header.css";

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasSmallWidth, setSmallWidth] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      setMenuOpen(!menuOpen);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      headerRef.current.classList.add("scrolled");
    } else {
      headerRef.current.classList.remove("scrolled");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="header" ref={headerRef}>
        <div className="container">
          <div className="logo">
            <Link to="/" className={`site-title`}>
              {siteTitle}
            </Link>
          </div>
          {hasSmallWidth ? (
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
          ) : (
            <Nav className={`nav-header`} />
          )}
        </div>
      </header>
      {hasSmallWidth && <Nav className={`nav-side ${menuOpen ? 'open' : ''}`} />}
    </>
  );
};

export default Header;
