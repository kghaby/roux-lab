import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import Nav from "./nav.js";
import "./header.css";

// TODO: extend header vertically so that pulling down on mobile doesn't show white space

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasSmallWidth, setSmallWidth] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const maxNavHeaderWidth = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--max-navheader-width'));
      setSmallWidth(window.innerWidth <= (maxNavHeaderWidth * parseFloat(getComputedStyle(document.documentElement).fontSize)));
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      setMenuOpen(!menuOpen);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      headerRef.current?.classList.add("scrolled");
    } else {
      headerRef.current?.classList.remove("scrolled");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`header`} ref={headerRef}>
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
