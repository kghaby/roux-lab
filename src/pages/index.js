import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as indexStyles from "../components/index.module.css";
import "../components/layout.css"; // global styles

const IndexPage = ({ data }) => {
  // Extract images and sort by year
  const images = data.allFile.nodes
    .map(node => ({
      ...node,
      year: parseInt(node.name.split('_')[1], 10)
    }))
    .sort((a, b) => b.year - a.year );

  // Function to get the most recent main image
  const getMainImage = () => {
    const mainImages = images.filter(image => image.name.includes('_main'));
    return mainImages.length ? mainImages[0] : images[0];
  };

  const mainImage = getMainImage();

  // Filter out the main image from the rest of the images
  const otherImages = images.filter(image => image.name !== mainImage.name);

  return (
    <Layout>
      <div className="centeredContent">
        <div className={indexStyles.firstScreen}>
          <div className={`${indexStyles.introContainer}`}>
            <p className={`${indexStyles.intro} fadeIn1`}>
              Welcome to the laboratory of Benoît Roux, in the
              <a href="https://biochem.uchicago.edu" className={indexStyles.link}> Department of Biochemistry and Molecular Biology</a> at <a href="http://www.uchicago.edu" className={indexStyles.link}> The University of Chicago</a>.
            </p>
            <p className={`${indexStyles.intro} fadeIn2`}>
              Here, you will find information on our research, our publications, current and past group members, and various computational tools for theoretical biophysics.
            </p>
          </div>
          <div className={`${indexStyles.mainImageWrapper} fadeIn3`}>
            <GatsbyImage
              image={getImage(mainImage)}
              className={indexStyles.groupPhoto}
              alt={`Main Group Photo (${mainImage.year})`}
            />
          </div>
        </div>
        <div className={indexStyles.imageScrollContainer}>
          {otherImages.map((image, index) => (
            <div key={index} className={`${indexStyles.imageWrapper} hidden`}>
              <GatsbyImage
                image={getImage(image)}
                className={indexStyles.groupPhoto}
                alt={`Group Photo ${image.year}`}
              />
              <div className={indexStyles.imageOverlay}>
                <span className={indexStyles.imageText}>{image.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export const query = graphql`
  {
    allFile(filter: {relativeDirectory: {eq: "group"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(quality: 95, formats: [AUTO, WEBP, PNG])
        }
        name
      }
    }
  }
`;

export default IndexPage;
