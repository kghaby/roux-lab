import React from "react";
import { withPrefix } from "gatsby";

const PNP = {
  title: "Three-dimensional Poisson-Nersnt-Planck (3dPNP)",
  content: (
    <>
    <p>
      Electrodiffusion theory is a useful approach to describe the flow of 
      ions through aqueous channels.  The PNP theory is based on a mean-field continuum electrostatic approximation. 
      The theory solves self-consistently for the non-equilibrium ion density (from Fick's law) and the electrostatic potential (from Poisson's equation).
      It is valid only for fairly wide aqueous pores.
      The results from three-dimensional (3d) PNP have been compared to those from the 
      GCMC/BD algorithm in the case of the OmpF porin from <i>E. coli</i>. 
    </p>
    <b>Downloads:</b>
    <ul><b>
      <li><a href={withPrefix("/resources/downloads/PNP/pbpnp.tar.gz")} download> PNP program with examples and documentation </a></li>
    </b></ul>
    </>
  ),
  // image: "brownian_dynamics.jpg" 
};

export default PNP;