import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import * as pageStyles from "./gallery.module.css";

const importAllSections = () => {
  const sectionsContext = require.context('../data/gallery', false, /\.js$/);
  const sections = sectionsContext.keys().map((key) => {
    const section = sectionsContext(key).default;
    const fileName = key.replace('./', '').replace('.js', ''); 

    return {
      ...section,
      key: fileName,
      id: fileName.replace(/\s+/g, '_').replace(/[^\w-]+/g, ''), 
    };
  });
  return sections.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
};

const GalleryPage = () => {
  const [currentSlide, setCurrentSlide] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const loadedSections = importAllSections();
    setSections(loadedSections);

  }, []);

  const openSlideshow = (index) => {
    setCurrentSlide(index);
  };

  const closeSlideshow = () => {
    setCurrentSlide(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sections.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sections.length) % sections.length);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      openSlideshow(index);
    }
  };

  return (
    <Layout>
      <div className={pageStyles.galleryGrid}>
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={pageStyles.thumbnail}
            onClick={() => openSlideshow(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            role="button"
            tabIndex={0}
            aria-label={`Open ${section.title}`}
          >
            {section.media}
            <h3>{section.title}</h3>
          </div>
        ))}
      </div>

      {currentSlide !== null && (
        <div className={pageStyles.slideshow}>
          <div className={pageStyles.slideContent}>
            <div className={pageStyles.slideMedia}>{sections[currentSlide].media}</div>
            <div className={pageStyles.slideDescription}>
              {sections[currentSlide].description}
            </div>
          </div>
          <button className={pageStyles.closeButton} onClick={closeSlideshow}>
            &times;
          </button>
          <button className={pageStyles.prevButton} onClick={prevSlide}>
            &#10094;
          </button>
          <button className={pageStyles.nextButton} onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      )}
    </Layout>
  );
};

export default GalleryPage;
