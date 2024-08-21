import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as pageStyles from "../../pages/gallery.module.css";

const Cavity = {
  title: "Electrostatics of the KcsA Channel",
  media: (
    <StaticImage
      src="../../images/research/science_july99_figure1.jpg"
      alt="Cavity"
      loading="eager"
      className={pageStyles.mediaImage}
    />
  ),
  description: (
    <>
      <p>
      Continuum electrostatics calculations based on the finite-difference Poisson-Boltzman equation are used to show that the cavity and 
      the pore helices of the KcsA channel are "tuned" to be preferably occupied by a monovalent cation.
      </p>

      <p>
      B. Roux and R. MacKinnon, "The cavity and pores helices in the KcsA K+ channel: electrostatic
      stabilization of monovalent cations",{" "} 
      <a href="http://www.sciencemag.org/cgi/content/full/285/5424/100"> 
      <i>Science</i></a> <b> 285</b>, 100-102 (1999).

      [<a href="http://www.ncbi.nlm.nih.gov:80/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=10390357&dopt=Abstract"> 
      PubMed</a> 
      ]  
      </p>
      <p>
      Perspective by Bojan Zagrovic and Richard Aldrich
      <a href="http://www.sciencemag.org/cgi/content/full/285/5424/59">
      "For the Latest Information, Tune to Channel KcsA" </a>
      </p>
    </>
  ),
};

export default Cavity;