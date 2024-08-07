import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";

const IndexPage = ({ data }) => {
  // Extract images and sort by year
  const images = data.allFile.nodes
    .map(node => ({
      ...node,
      year: parseInt(node.name.split('_')[1], 10)
    }))
    .sort((a, b) => b.year - a.year );

  return (
    <Layout>
      <div className={styles.introContainer}>
        <p className={styles.intro}>
          Welcome to the laboratory of Benoît Roux, in the
          <a href="https://biochem.uchicago.edu" className={styles.link}> Department of Biochemistry and Molecular Biology</a> at <a href="http://www.uchicago.edu" className={styles.link}> The University of Chicago</a>.
        </p>
        <p className={styles.intro}>
          Here, you will find information on our research, our publications, current and past group members, and various computational tools for theoretical biophysics.
        </p>
      </div>
      <div className={styles.imageScrollContainer}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageWrapper}>
            <GatsbyImage
              image={getImage(image)}
              className={styles.groupPhoto}
              alt={`Group Photo ${image.year}`}
            />
            <div className={styles.imageOverlay}>
              <span className={styles.imageText}>{image.year}</span>
            </div>
          </div>
        ))}
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
          gatsbyImageData(height: 400, quality: 95, formats: [AUTO, WEBP, AVIF])
        }
        name
      }
    }
  }
`;

export default IndexPage;

