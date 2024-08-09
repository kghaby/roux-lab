import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Tilt from 'react-parallax-tilt';

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as indexStyles from "../components/index.module.css";
import "../components/layout.css"; // global styles

// TODO: make sure tilt doesnt clip. opt tilt options. add timed protein in background. add collage or brownian dyn in background

const IndexPage = ({ data }) => {
  const images = data.allFile.nodes
    .map(node => ({
      ...node,
      year: parseInt(node.name.split('_')[1], 10),
    }))
    .sort((a, b) => b.year - a.year);

  const mainImage = images.find(image => image.name.includes('_main')) || images[0];
  const otherImages = images.filter(image => image.name !== mainImage.name);

  const tiltOptions = {
    reverse: false,
    max: 8,
    perspective: 650,
    scale: 1,
    speed: 100,
    transition: true,
    axis: null,
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
  };

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
          <Tilt options={tiltOptions}>
              <GatsbyImage
                image={getImage(mainImage)}
                className={indexStyles.groupPhoto}
                alt={`Main Group Photo (${mainImage.year})`}
              />
            </Tilt>
          </div>
        </div>
        <div className={indexStyles.imageScrollContainer}>
          {otherImages.map((image, index) => (
            <div key={index} className={`${indexStyles.imageWrapper} hidden`}>
              <Tilt options={tiltOptions}>
                <GatsbyImage
                  image={getImage(image)}
                  className={indexStyles.groupPhoto}
                  alt={`Group Photo ${image.year}`}
                />
              
              <div className={indexStyles.imageOverlay}>
                <span className={indexStyles.imageText}>{image.year}</span>
              </div>
              </Tilt>
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