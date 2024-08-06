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
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen, hasSmallWidth]);

  useEffect(() => {
    const calculateWidths = () => {
      const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

      // Set CSS variables for sidebar width and header height
      if (navSideRef.current) {
        const navItems = navSideRef.current.querySelectorAll('.nav-list li a');
        let maxWidth = 0;
        navItems.forEach((item) => {
          const width = item.offsetWidth;
          if (width > maxWidth) {
            maxWidth = width;
          }
        });
        
        const maxWidthInRem = maxWidth / rootFontSize;
        const headerHeightInRem = headerRef.current.offsetHeight / rootFontSize;
        // console.log(headerHeightInRem);
    
        document.documentElement.style.setProperty('--sidebar-width', `${maxWidthInRem + 3}rem`);
        document.documentElement.style.setProperty('--header-height', `${headerHeightInRem}rem`);
      }

      // Set CSS variables for max nav-header width
      if (navHeaderRef.current && headerRef.current) {
        const siteTitle = headerRef.current.querySelector('.site-title');
        let maxWidth = navHeaderRef.current.offsetWidth + siteTitle.offsetWidth + 4 * rootFontSize;
        const maxWidthInRem = maxWidth / rootFontSize;
        document.documentElement.style.setProperty('--max-navheader-width', `${maxWidthInRem}rem`);
      }
    };

    calculateWidths();

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
