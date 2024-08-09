import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Tilt from 'react-parallax-tilt';

import Layout from "../components/layout";
import Seo from "../components/seo";
import BrownianMotion from "../components/BrownianMotion";
import * as indexStyles from "../components/index.module.css";
import "../components/layout.css"; // global styles

//TODO: mathjax static 
//TODO: fix curved corners for mobile
//TODO: fix flickering of gradient on mobile

const IndexPage = ({ data }) => {

  // Brownian dynamics
  const [D, setD] = useState(10.0);
  const [F, setF] = useState(3);
  const [T, setT] = useState(300);
  const [dt, setDt] = useState(0.1);
  const [particleDensity, setParticleDensity] = useState(4);

  // Images
  const images = data.allFile.nodes
    .map(node => ({
      ...node,
      year: parseInt(node.name.split('_')[1], 10),
    }))
    .sort((a, b) => b.year - a.year);

  const mainImage = images.find(image => image.name.includes('_main')) || images[0];
  const otherImages = images.filter(image => image.name !== mainImage.name);

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
      <BrownianMotion
        D={D}
        F={F}
        T={T}
        dt={dt}
        particleDensity={particleDensity}
      />
      <div className="centeredContent disableClick">
        <div className={indexStyles.firstScreen}>
          <li className={`${indexStyles.introContainer} fadeInBG enableClick glass`}>
            <p className={`${indexStyles.intro} fadeIn1`}>
              Welcome to the laboratory of Benoît Roux, in the
              <a href="https://biochem.uchicago.edu" className={indexStyles.link}> Department of Biochemistry and Molecular Biology</a> at <a href="http://www.uchicago.edu" className={indexStyles.link}> The University of Chicago</a>.
            </p>
            <p className={`${indexStyles.intro} fadeIn2`}>
              Here, you will find information on our research, our publications, current and past group members, and various computational tools for theoretical biophysics.
            </p>
          </li>
          <div className={`${indexStyles.mainImageWrapper} fadeIn3 enableClick`}>
            <Tilt
                tiltReverse={false}
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
                perspective={900}
                scale={1.0}
                transitionSpeed={1000}
                reset={true}
                gyroscope={true}
                className="parallaxTilt"
              >
              <GatsbyImage
                image={getImage(mainImage)}
                className={indexStyles.groupPhoto}
                alt={`Main Group Photo (${mainImage.year})`}
              />
              <div className={indexStyles.imageOverlay}>
                <span className={indexStyles.imageText}>{mainImage.year}</span>
              </div>
            </Tilt>
          </div>
        </div>
        <div className={indexStyles.imageScrollContainer}>
          {otherImages.map((image, index) => (
            <div key={index} className={`${indexStyles.imageWrapper} hidden enableClick`}>
              <Tilt
                tiltReverse={false}
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
                perspective={900}
                scale={1.0}
                transitionSpeed={1000}
                reset={true}
                gyroscope={true}
                className="parallaxTilt"
              >
                <GatsbyImage
                  image={getImage(image)}
                  className={indexStyles.groupPhoto}
                  alt={`Group Photo ${image.year}`}
                />
              <div className={indexStyles.imageOverlay}>
                <div className={indexStyles.imageText}>{image.year}</div>
              </div>
              </Tilt>
            </div>
          ))}
        </div>
        <div className="blankPage">
          <div className="glass enableClick">
            <div className={indexStyles.equation}>
              {mathjaxFailed ? (
                <span>x(t + dt) = x(t) + (DF(x(t))k_B T)dt + g</span>
              ) : (
                <span>{`$$x(t + \\Delta t) = x(t) + \\left(\\frac{DF(x(t))}{k_B T}\\right)\\Delta t + g$$`}</span>
              )}
            </div>
            <div className={indexStyles.slidersContainer}>
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

