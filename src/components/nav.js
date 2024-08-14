import React, { forwardRef } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import "./nav.css";

const Nav = forwardRef(({ className }, ref) => {
  const location = useLocation();

  return (
    <nav className={className} ref={ref}>
      <ul className="nav-list">
        <li className={location.pathname === "/" ? "active-link" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/members/" ? "active-link" : ""}>
          <Link to="/members">Members</Link>
        </li>
        <li className={location.pathname === "/research/" ? "active-link" : ""}>
          <Link to="/research">Research</Link>
        </li>
        <li className={location.pathname === "/methods/" ? "active-link" : ""}>
          <Link to="/methods">Methods</Link>
        </li>
        <li className={location.pathname === "/publications/" ? "active-link" : ""}>
          <Link to="/publications">Publications</Link>
        </li>
        <li className={location.pathname === "/openings/" ? "active-link" : ""}>
          <Link to="/openings">Openings</Link>
        </li>
        <li className={location.pathname === "/gallery/" ? "active-link" : ""}>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className={location.pathname === "/tools/" ? "active-link" : ""}>
          <Link to="/tools">Tools</Link>
        </li>
        <li className={location.pathname === "/useful-links/" ? "active-link" : ""}>
          <Link to="/useful-links">Useful Links</Link>
        </li>
        <li className={location.pathname === "/contacts/" ? "active-link" : ""}>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
});

export default Nav;


