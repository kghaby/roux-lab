import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import Nav from "./nav.js";
import "./header.css";

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasSmallWidth, setSmallWidth] = useState(false);
  const headerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const maxNavHeaderWidth = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--max-navheader-width'));
      setSmallWidth(window.innerWidth <= (maxNavHeaderWidth * parseFloat(getComputedStyle(document.documentElement).fontSize)));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // sync --header-height to actual rendered container height (mobile font metrics vary)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const sync = () => {
      const h = el.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--header-height', `${h}px`);
    };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    window.addEventListener('orientationchange', sync);
    return () => { ro.disconnect(); window.removeEventListener('orientationchange', sync); };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) headerRef.current?.classList.add("scrolled");
    else headerRef.current?.classList.remove("scrolled");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`header`} ref={headerRef}>
        <div className="container" ref={containerRef}>
          <div className="logo">
            <Link to="/" className={`siteTitle`}>{siteTitle}</Link>
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