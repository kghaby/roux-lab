import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "@reach/router";

import Layout from "../components/layout";
import Seo from "../components/seo";
import summary from "../data/methods/summary";
import * as pageStyles from "./methods.module.css";

// Import all section files from the sections directory
const importAllSections = () => {
  const sectionsContext = require.context('../data/methods/sections', true, /\.js$/);
  const sections = sectionsContext.keys().map((key) => {
    const section = sectionsContext(key).default;
    const folderName = key.split('/')[1]; // Assuming the structure is './folderName/index.js'

    return {
      ...section,
      key: folderName,
      id: folderName.replace(/\s+/g, '_').replace(/[^\w-]+/g, ''), // Sanitized for valid HTML ID
    };
  });
  return sections.sort((a, b) => a.title.localeCompare(b.title));
};

const MethodsPage = () => {
  const [sections, setSections] = useState([]);
  const [openSections, setOpenSections] = useState([]);
  const sectionRefs = useRef({}); 

  const location = useLocation();

  useEffect(() => {
    const loadedSections = importAllSections();
    const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const headerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));
  
    setSections(loadedSections);
  
    const hash = location.hash.replace("#", "");
    if (hash) {
      const ids = hash.split('||');
      setOpenSections(ids);
      setTimeout(() => {
        if (ids.length > 0) {
          const element = sectionRefs.current[ids[0]];
          if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offset = headerHeight * fontSize;
            window.scrollTo({
              top: elementPosition - offset,
              behavior: "instant"
            });
          }
        }
      }, 1);
    }
  }, [location.hash]);
 
  const toggleSection = (id) => {
    setOpenSections((prevOpenSections) => {
      let newOpenSections;
  
      if (prevOpenSections.includes(id)) {
        newOpenSections = prevOpenSections.filter((section) => section !== id);
      } else {
        newOpenSections = [...prevOpenSections, id];
      }
  
      if (newOpenSections.length === 0) {
        window.history.replaceState({}, '', window.location.pathname); 
      } else {
        const hash = newOpenSections.join('||');
        window.history.replaceState({}, '', `#${hash}`);
      }
  
      return newOpenSections;
    });
  };

  return (
    <Layout>
      <div className={pageStyles.methodsPage}>
        <section key={"Summary"} id={"Summary"}>
          <h1><b>Methodological Developments</b></h1>
          {summary}
        </section>
        {sections.map((section) => (
          <section 
            key={section.key} 
            id={section.id} 
            ref={(el) => (sectionRefs.current[section.id] = el)}
          >
            <button 
              onClick={() => toggleSection(section.id)} 
              style={{ 
                textAlign: "left", 
                width: "100%", 
                background: "none", 
                border: "none", 
                padding: 0, 
                cursor: "pointer", 
                marginTop: "1rem",
              }}
              aria-expanded={openSections.includes(section.id)}
            >
              <h2 style={{ display: "flex" }}>
                <span style={{ fontFamily: "var(--font-mono)", marginRight: "0.5rem" }}>
                  {openSections.includes(section.id) ? "-" : "+"}
                </span>
                <span 
                  style={{ 
                    display: "inline-block", 
                    whiteSpace: "pre-wrap", 
                    marginLeft: "0.5rem" 
                  }}
                >
                  {section.title}
                </span>
              </h2>
            </button>
            {openSections.includes(section.id) && (
              <div className={pageStyles.methodsSection}>
                <div className={pageStyles.sectionInfo}>
                  {section.content}
                </div>
              </div>
            )}
          </section>
        ))}
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Methods" />

export default MethodsPage;

