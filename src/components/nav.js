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
          <Link to="/"><span className="text-content">Home</span></Link>
        </li>
        <li className={location.pathname === "/members/" ? "active-link" : ""}>
          <Link to="/members"><span className="text-content">Members</span></Link>
        </li>
        <li className={location.pathname === "/research/" ? "active-link" : ""}>
          <Link to="/research"><span className="text-content">Research</span></Link>
        </li>
        <li className={location.pathname === "/methods/" ? "active-link" : ""}>
          <Link to="/methods"><span className="text-content">Methods</span></Link>
        </li>
        <li className={location.pathname === "/publications/" ? "active-link" : ""}>
          <Link to="/publications"><span className="text-content">Publications</span></Link>
        </li>
        <li className={location.pathname === "/openings/" ? "active-link" : ""}>
          <Link to="/openings"><span className="text-content">Openings</span></Link>
        </li>
        <li className={location.pathname === "/gallery/" ? "active-link" : ""}>
          <Link to="/gallery"><span className="text-content">Gallery</span></Link>
        </li>
        <li className={location.pathname === "/tools/" ? "active-link" : ""}>
          <Link to="/tools"><span className="text-content">Tools</span></Link>
        </li>
        <li className={location.pathname === "/useful-links/" ? "active-link" : ""}>
          <Link to="/useful-links"><span className="text-content">Useful Links</span></Link>
        </li>
        <li className={location.pathname === "/contacts/" ? "active-link" : ""}>
          <Link to="/contacts"><span className="text-content">Contacts</span></Link>
        </li>
      </ul>
    </nav>
  );
});

export default Nav;


