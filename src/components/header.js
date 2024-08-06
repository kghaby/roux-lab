import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import Nav from "./nav.js";
import "./header.css";

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasSmallWidth, setSmallWidth] = useState(false);
  const headerRef = useRef(null);
  const navHeaderRef = useRef(null);
  const navSideRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      setMenuOpen(!menuOpen);
    }
  };

  useEffect(() => {
    if (menuOpen && hasSmallWidth) {
      document.body.classList.add("menu-open");
      navSideRef.current.querySelectorAll('a').forEach((item) => item.setAttribute('tabindex', '0'));
    } else {
      document.body.classList.remove("menu-open");
      if (navSideRef.current) {
        navSideRef.current.querySelectorAll('a').forEach((item) => item.setAttribute('tabindex', '-1'));
      }
    }
  }, [menuOpen, hasSmallWidth]);

  useEffect(() => {
    const handleResize = () => {
      const maxNavHeaderWidth = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--max-navheader-width'));
      setSmallWidth(window.innerWidth <= (maxNavHeaderWidth * parseFloat(getComputedStyle(document.documentElement).fontSize)));
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="header" ref={headerRef}>
        <div className="container">
          <div className="logo">
            <Link to="/" className="site-title">
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
            <Nav className="nav-header" ref={navHeaderRef} />
          )}
        </div>
      </header>
      {hasSmallWidth && <Nav className={`nav-side ${menuOpen ? 'open' : ''}`} ref={navSideRef} />}
    </>
  );
};

export default Header;


