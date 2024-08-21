import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "@reach/router";

import Layout from "../components/layout";
import Seo from "../components/seo";
import summary from "../data/research/summary";
import * as pageStyles from "./sectioned.module.css";

// Import all section files from the sections directory
const importAllSections = () => {
  const sectionsContext = require.context('../data/research/sections', true, /\.js$/);
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

const ResearchPage = () => {
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

  const handleKeyDown = (event, section) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleSection(section.id);
    }
  };

  return (
    <Layout>
      <div className={pageStyles.sectionedPage}>
        <section key={"Summary"} id={"Summary"}>
          <h1><b>Research Projects</b></h1>
          {summary}
        </section>
        {sections.map((section) => (
          <section 
            key={section.key} 
            id={section.id} 
            ref={(el) => (sectionRefs.current[section.id] = el)}
          >
            <div 
              onClick={() => toggleSection(section.id)} 
              onKeyDown={(event) => handleKeyDown(event, section)}
              className={pageStyles.sectionHeader}
              role="button"
              tabIndex={0}
              aria-label="Toggle section"
              aria-expanded={openSections.includes(section.id)}
            >
              <h2 style={{ display: "flex" }}>
                <span className={pageStyles.sectionHeaderIndicator}>
                  {openSections.includes(section.id) ? "-" : "+"}
                </span>
                <span className={pageStyles.sectionHeaderTitle}>
                  {section.title}
                </span>
              </h2>
            </div>
            {openSections.includes(section.id) && (
              <div className={pageStyles.pageSection}>
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

export const Head = () => <Seo title="Research" />

export default ResearchPage;

