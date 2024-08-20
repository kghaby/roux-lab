import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import Nav from "./nav.js";
import "./header.css";

//TODO: selection and current page like windows taskbar

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasSmallWidth, setSmallWidth] = useState(false);
  const headerRef = useRef(null);
  const maxNavHeaderWidth = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--max-navheader-width'));
  const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

  useEffect(() => {
    const handleResize = () => {
      setSmallWidth(window.innerWidth <= (maxNavHeaderWidth * fontSize));
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [fontSize, maxNavHeaderWidth]);

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
            <Link to="/" className={`siteTitle`}>
              {siteTitle}
            </Link>
          </div>
          {hasSmallWidth ? (
            <div
              className="menuToggle"
              onClick={() => setMenuOpen(!menuOpen)}
              onKeyDown={handleKeyDown}
              role="button"
              tabIndex={0}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              // style={{ transform: menuOpen ? "rotate(-180deg)" : "rotate(0)" }}
              // >
              //   {'<'}
            >
              {menuOpen ? '>' : '<'}
            </div>
          ) : (
            <Nav className={`navHeader`} />
          )}
        </div>
      </header>
      {hasSmallWidth && <Nav className={`navSide ${menuOpen ? 'open' : ''}`} />}
    </>
  );
};

export default Header;
