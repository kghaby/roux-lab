import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import summary from "../data/research/summary";
import * as pageStyles from "./research.module.css";

// Function to dynamically import all section files from the sections directory
const importAllSections = () => {
  const sectionsContext = require.context('../data/research/sections', false, /\.js$/);
  const sections = sectionsContext.keys().map((key) => {
    const section = sectionsContext(key).default;
    return {
      ...section,
      key: key.replace('./', '').replace('.js', '')
    };
  });
  return sections.sort((a, b) => a.title.localeCompare(b.title));
};

const ResearchPage = () => {
  const [sections, setSections] = useState([]);
  const [openSections, setOpenSections] = useState([]);

  useEffect(() => {
    const loadedSections = importAllSections();
    setSections(loadedSections);
  }, []);

  const toggleSection = (title) => {
    setOpenSections((prevOpenSections) =>
      prevOpenSections.includes(title)
        ? prevOpenSections.filter((section) => section !== title)
        : [...prevOpenSections, title]
    );
  };

  // Query all images in the src/images directory using GraphQL
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(
                quality: 95
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);

  const getImageForSection = (relativeImagePath) => {
    const imageNode = data.allFile.edges.find(edge => edge.node.relativePath === relativeImagePath);
    return imageNode ? getImage(imageNode.node.childImageSharp) : null;
  };

  return (
    <Layout>
      <div className={pageStyles.researchPage}>
        <section key={"Summary"} id={"Summary"}>
          <h1><b>Research Projects</b></h1>
          {summary}
        </section>
        {sections.map((section) => (
          <section key={section.key} id={section.key}>
            <h2 onClick={() => toggleSection(section.title)} style={{ cursor: "pointer" }}>
              <span style={{ fontFamily: "var(--font-mono)", marginRight: "0.5rem" }}>
                {openSections.includes(section.title) ? "-" : "+"}
              </span>
              {section.title}
            </h2>
            {openSections.includes(section.title) && (
              <div className={pageStyles.researchSection}>
                <div className={pageStyles.sectionInfo}>
                  {section.content}
                </div>
                {section.image && (
                  <div className={pageStyles.sectionImage}>
                    <GatsbyImage
                      image={getImageForSection(section.image)}
                      alt={section.title}
                      style={{ borderRadius: `0.5rem` }}
                    />
                  </div>
                )}
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
