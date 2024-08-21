import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ExperimentalResearch = {
  title: "Experimental research",
  content: (
      <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",  
      }}>
        <div style={{
          margin: 0,
        }}>
        <p>
        Our group includes a fully-equipped experimental lab, performing expression and purification of proteins such as Hck tyrosine kinase and OmpF Porin. These proteins are characterized using X-ray diffraction and SAXS scattering (see <a href="http://www.pnas.org/content/107/36/15757.full">Yang et al, 2010</a>, <a href="http://dx.doi.org/10.1016/j.jmb.2009.11.042">Dhakshnamoorthy et al, 2010</a>).
        </p>
        </div>
        <StaticImage 
          src="../../../../images/research/roux_exptl.jpg" 
          alt="In the lab"
          loading="lazy"
          style={{
            borderRadius: "0.5rem",
            margin: "0.5rem",
            marginBottom: "2rem",
            maxWidth: "48rem",
          }} 
        />
      </div>
      </>
  ),
  // image: "research/roux_exptl.jpg"
};

export default ExperimentalResearch;

