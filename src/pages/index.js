import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Tilt from 'react-parallax-tilt';

import Layout from "../components/layout_home";
import Seo from "../components/seo";
import BrownianDyn from "../components/brownian_dyn";
import * as pageStyles from "./index.module.css";
import "../components/layout.css"; // global styles

// Is the scroll issue bc of the fixed nav side bar?

const IndexPage = ({ data }) => {

  // Scroll to top on initial load
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  useEffect(() => {
    if (isInitialLoad) {
      window.scrollTo(0, 0); // Scroll to top on the first load
      setIsInitialLoad(false); // Mark as not the initial load
    }
  }, [isInitialLoad]);
  
  // Images
  const images = data.allFile.nodes
    .map(node => ({
      ...node,
      year: parseInt(node.name.split('_')[1], 10),
    }))
    .sort((a, b) => b.year - a.year);

  const mainImage = images.find(image => image.name.includes('_main')) || images[0];
  const otherImages = images.filter(image => image.name !== mainImage.name);

  const tiltOptions = {
    tiltReverse: false,
    tiltMaxAngleX: 4,
    tiltMaxAngleY: 4,
    perspective: 900,
    scale: 1.0,
    transitionSpeed: 500,
    reset: true,
    gyroscope: true,
    className: "parallaxTilt curvedCorners",
  };  

  // Brownian dynamics
  const [D, setD] = useState(10.0);
  const [F, setF] = useState(5);
  const [T, setT] = useState(300);
  const [dt, setDt] = useState(0.1);
  const [particleDensity, setParticleDensity] = useState(4);

  // Math
  const [mathjaxFailed, setMathjaxFailed] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      setMathjaxFailed(false);
      window.MathJax.typeset();
    };

    script.onerror = () => {
      setMathjaxFailed(true);
    };
  }, []);

  return (
    <Layout>
      <BrownianDyn
        D={D}
        F={F}
        T={T}
        dt={dt}
        particleDensity={particleDensity}
      />
      <div className="centeredContent disableClick">
        <div className={pageStyles.firstScreen}>
          <div className={`${pageStyles.introContainer} fadeInBG enableClick glass`}>
            <p className={`${pageStyles.intro} fadeIn1`}>
              Welcome to the laboratory of Benoît Roux, in the
              <a href="https://biochem.uchicago.edu"> Department of Biochemistry and Molecular Biology</a> at <a href="http://www.uchicago.edu"> The University of Chicago</a>.
            </p>
            <p className={`${pageStyles.intro} fadeIn2`}>
              Here, you will find information on our research, our publications, current and past group members, and various computational tools for theoretical biophysics.
            </p>
          </div>
          <div className={`${pageStyles.mainImageWrapper} fadeIn3 enableClick`}>
            <Tilt {...tiltOptions}>
              <div style={{ willChange: "transform" }}>
                <GatsbyImage
                  image={getImage(mainImage)}
                  className={pageStyles.groupPhoto}
                  alt={`Main Group Photo (${mainImage.year})`}
                  imgStyle={{ borderRadius: "0.75rem" }}
                />
                <div className={pageStyles.imageOverlay}></div>
              </div>
              <div className={pageStyles.imageText}>{mainImage.year}</div>
            </Tilt>
          </div>
        </div>
        <div className={pageStyles.imageScrollContainer}>
          {otherImages.map((image, index) => (
            <div key={index} className={`${pageStyles.imageWrapper} hidden enableClick`}>
              <Tilt {...tiltOptions}>
                <div style={{ willChange: "transform" }}>
                  <GatsbyImage
                    image={getImage(image)}
                    className={pageStyles.groupPhoto}
                    alt={`Group Photo ${image.year}`}
                    imgStyle={{ borderRadius: "0.75rem" }}
                  />
                  <div className={pageStyles.imageOverlay}></div>
                </div>
                <div className={pageStyles.imageText}>{image.year}</div>
              </Tilt>
            </div>
          ))}
        </div>
        <div className="blankPage">
          <div className="glass enableClick">
            <div className={pageStyles.equation}>
              {mathjaxFailed ? (
                <span>x(t + dt) = x(t) + (DF(x(t))k_B T)dt + g</span>
              ) : (
                <span>{`$$x(t + \\Delta t) = x(t) + \\left(\\frac{DF(x(t))}{k_B T}\\right)\\Delta t + g$$`}</span>
              )}
            </div>
            <div className={pageStyles.slidersContainer}>
              <label htmlFor="diffusion">D</label>
              <input
                id="diffusion"
                type="range"
                min="0.1"
                max="500.0"
                step="1"
                value={D}
                onChange={(e) => setD(parseFloat(e.target.value))}
              />
              <label htmlFor="force">F</label>
              <input
                id="force"
                type="range"
                min="0.0"
                max="20.0"
                step="0.1"
                value={F}
                onChange={(e) => setF(parseFloat(e.target.value))}
              />
              {/* <label htmlFor="temperature">T</label>
              <input
                id="temperature"
                type="range"
                min="100"
                max="500"
                step="10"
                value={T}
                onChange={(e) => setT(parseFloat(e.target.value))}
              />
              <label htmlFor="timestep">Δt</label>
              <input
                id="timestep"
                type="range"
                min="0.01"
                max="1.0"
                step="0.01"
                value={dt}
                onChange={(e) => setDt(parseFloat(e.target.value))}
              /> */}
            </div>
          </div>
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

