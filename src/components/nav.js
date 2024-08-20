import React, { forwardRef } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

import { pathPrefix } from "../path-prefix";
import "./nav.css";

const Nav = forwardRef(({ className }, ref) => {
  const location = useLocation();

  // Remove pathPrefix from pathname so that github and local paths match
  const pathWithoutPrefix = location.pathname.replace(new RegExp(`^${pathPrefix}`), '');

  const isActive = (linkPath) => {
    return pathWithoutPrefix.startsWith(linkPath);
  };

  return (
    <nav className={className} ref={ref}>
      <ul className="navList">
        <li className={pathWithoutPrefix === "/" ? "activeLink" : ""}>
          <Link to="/"><span className="textContent">Home</span></Link>
        </li>
        <li className={isActive("/members") ? "activeLink" : ""}>
          <Link to="/members"><span className="textContent">Members</span></Link>
        </li>
        <li className={isActive("/research") ? "activeLink" : ""}>
          <Link to="/research"><span className="textContent">Research</span></Link>
        </li>
        <li className={isActive("/methods") ? "activeLink" : ""}>
          <Link to="/methods"><span className="textContent">Methods</span></Link>
        </li>
        <li className={isActive("/publications") ? "activeLink" : ""}>
          <Link to="/publications"><span className="textContent">Publications</span></Link>
        </li>
        <li className={isActive("/openings") ? "activeLink" : ""}>
          <Link to="/openings"><span className="textContent">Openings</span></Link>
        </li>
        <li className={isActive("/gallery") ? "activeLink" : ""}>
          <Link to="/gallery"><span className="textContent">Gallery</span></Link>
        </li>
        <li className={isActive("/tools") ? "activeLink" : ""}>
          <Link to="/tools"><span className="textContent">Tools</span></Link>
        </li>
        <li className={isActive("/useful-links") ? "activeLink" : ""}>
          <Link to="/useful-links"><span className="textContent">Useful Links</span></Link>
        </li>
        <li className={isActive("/contacts") ? "activeLink" : ""}>
          <Link to="/contacts"><span className="textContent">Contacts</span></Link>
        </li>
      </ul>
    </nav>
  );
});

export default Nav;




