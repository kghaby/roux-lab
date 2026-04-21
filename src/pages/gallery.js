import React, { useState, useEffect } from "react";
import { useLocation } from "@reach/router";
import Layout from "../components/layout";
import * as pageStyles from "./gallery.module.css";

const importAllSections = () => {
  const ctx = require.context('../data/gallery', false, /\.js$/);
  return ctx.keys().map((key) => {
    const section = ctx(key).default;
    const fileName = key.replace('./', '').replace('.js', '');
    return { ...section, key: fileName, id: fileName.replace(/\s+/g, '_').replace(/[^\w-]+/g, '') };
  }).sort((a, b) => a.title.localeCompare(b.title));
};

const GalleryPage = () => {
  const [currentSlide, setCurrentSlide] = useState(null);
  const [direction, setDirection] = useState(1); // +1 right, -1 left
  const [sections, setSections] = useState([]);
  const [animKey, setAnimKey] = useState(0); // forces remount → replays keyframe
  const location = useLocation();

  useEffect(() => { setSections(importAllSections()); }, []);

  const openSlideshow = (i) => { setDirection(1); setCurrentSlide(i); setAnimKey(k => k + 1); };
  const closeSlideshow = () => setCurrentSlide(null);

  const advance = (delta) => {
    setDirection(delta);
    setCurrentSlide((p) => (p + delta + sections.length) % sections.length);
    setAnimKey(k => k + 1);
  };

  // keyboard nav (arrows + esc)
  useEffect(() => {
    if (currentSlide === null) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") advance(1);
      else if (e.key === "ArrowLeft") advance(-1);
      else if (e.key === "Escape") closeSlideshow();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentSlide, sections.length]);

  // hash → slide (on load or external nav back)
  useEffect(() => {
    if (!sections.length) return;
    const hash = location.hash.replace("#", "");
    if (!hash) return;
    const idx = sections.findIndex((s) => s.id === hash);
    if (idx !== -1) {
      setDirection(1);
      setCurrentSlide(idx);
      setAnimKey((k) => k + 1);
    }
  }, [sections, location.hash]);

  // slide → hash (mirror methods page URL-state pattern)
  useEffect(() => {
    if (currentSlide === null) {
      if (window.location.hash) window.history.replaceState({}, "", window.location.pathname);
      return;
    }
    const id = sections[currentSlide]?.id;
    if (id) window.history.replaceState({}, "", `#${id}`);
  }, [currentSlide, sections]);

  // popstate: back/forward within SPA syncs slide with hash
  useEffect(() => {
    const onPop = () => {
      const hash = window.location.hash.replace("#", "");
      const idx = hash ? sections.findIndex((s) => s.id === hash) : -1;
      setCurrentSlide(idx === -1 ? null : idx);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [sections]);

  const handleKeyDown = (e, i) => {
    if (e.key === "Enter" || e.key === " ") openSlideshow(i);
  };

  return (
    <Layout>
      <div className={pageStyles.galleryGrid}>
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={pageStyles.thumbnail}
            onClick={() => openSlideshow(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
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
        <div className={pageStyles.slideshow} onClick={closeSlideshow}>
          <div
            key={animKey}
            className={`${pageStyles.slideContent} ${direction > 0 ? pageStyles.slideInRight : pageStyles.slideInLeft}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={pageStyles.slideMedia}>{sections[currentSlide].media}</div>
            <div className={pageStyles.slideDescription}>
              {sections[currentSlide].description}
            </div>
          </div>
          <button className={pageStyles.closeButton} onClick={(e) => { e.stopPropagation(); closeSlideshow(); }} aria-label="Close">&times;</button>
          <button className={pageStyles.prevButton} onClick={(e) => { e.stopPropagation(); advance(-1); }} aria-label="Previous">&#10094;</button>
          <button className={pageStyles.nextButton} onClick={(e) => { e.stopPropagation(); advance(1); }} aria-label="Next">&#10095;</button>
        </div>
      )}
    </Layout>
  );
};

export default GalleryPage;