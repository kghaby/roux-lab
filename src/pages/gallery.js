import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "@reach/router";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as pageStyles from "./sectioned.module.css";

// Import all section files from the sections directory
const importAllSections = () => {
  const sectionsContext = require.context('../data/gallery', false, /\.js$/);
  const sections = sectionsContext.keys().map((key) => {
    const section = sectionsContext(key).default;
    const fileName = key.replace('./', '').replace('.js', ''); // Assuming the structure is './folderName/index.js'

    return {
      ...section,
      key: fileName,
      id: fileName.replace(/\s+/g, '_').replace(/[^\w-]+/g, ''), // Sanitized for valid HTML ID
    };
  });
  return sections.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
};

const GalleryPage = () => {
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
      <div className={pageStyles.sectionedPage}>
        <section key={"top"} id={"top"}>
          <h1><b>Gallery</b></h1>
        </section>
        {sections.map((section) => (
          <section 
            key={section.key} 
            id={section.id} 
            ref={(el) => (sectionRefs.current[section.id] = el)}
          >
            <button 
              onClick={() => toggleSection(section.id)} 
              className={pageStyles.sectionButton}
              aria-expanded={openSections.includes(section.id)}
            >
              <h2 style={{ display: "flex" }}>
                <span className={pageStyles.sectionButtonIndicator}>
                  {openSections.includes(section.id) ? "-" : "+"}
                </span>
                <span className={pageStyles.sectionButtonTitle}>
                  {section.title}
                </span>
              </h2>
            </button>
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

export const Head = () => <Seo title="Gallery" />

export default GalleryPage;
