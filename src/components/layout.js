/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

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

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main className="main-content">{children}</main>
        <footer 
          className="footer"
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}>
          <p>&copy; {new Date().getFullYear()} Roux Lab | University of Chicago</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;

