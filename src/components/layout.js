/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import "./layout.css"; // Import the global styles
import WaterBackground from "../components/WaterBackground";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
  
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(element => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="siteWrapper">
      <WaterBackground density={5}/>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="mainContent">{children}</main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Roux Lab | University of Chicago</p>
      </footer>
    </div>
  );
};

export default Layout;

