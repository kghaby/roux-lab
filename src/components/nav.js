import React, { forwardRef } from "react";
import { Link } from "gatsby";
import "./nav.css";

const Nav = forwardRef(({ className }, ref) => (
  <nav className={className} ref={ref}>
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
  </nav>
));

export default Nav;


