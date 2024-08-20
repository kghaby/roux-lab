import React from "react";

const SAXS = {
  title: "Fast-SAXS method for small-angle X-ray scattering (SAXS) of proteins",
  content: (
    <>
    <p>
      The development of a fast coarse-grained (CG) method for computing SAXS profiles from a given protein conformation can be advantageous, especially when massive but CG model structures are generated from computer modeling. The Fast-SAXS method is built within the framework of the Debye formalism. Notably, in addition to the introduction of CG structure factors for amino acids, explicit CG water molecules are placed at the protein surface to account for the collective scattering contributions. 
    </p>
    <p>
      Clearly, Fast-SAXS takes advantage of the intrinsic low-resolution and CG nature of solution scattering data. It allows rapid scattering determination from a large number of conformations that can be extracted from CG simulations to obtain scattering characterization of protein conformations. The method includes three important elements, (1) effective residue structure factors derived from the Protein Data Bank, (2) explicit treatment of water molecules in the hydration layer at the surface of the protein, and (3) an ensemble average of scattering from a variety of appropriate conformations to account for macromolecular flexibility (At the moment, the ensemble generation is up to users). More details can be found in a recent publication at Biophysical Journal (see <a href="/resources/publications/yang_bj_2009.pdf">Yang et al, 2009</a> for the methodology).
    </p>
    <p>
      The codes of the Fast-SAXS calculation can be downloaded from the link as provided below. In this package, an example of the Fast-SAXS calculation using HEW lysozyme is provided to illustrate the general procedure.
    </p>
    <b>Downloads:</b>
    <ul><b>
      <li><a href="/resources/downloads/SAXS/Fast-SAXS.v1.tar.gz" download>Fast-SAXS for proteins</a></li>
    </b></ul>
    </>
  ),
  // image: "brownian_dynamics.jpg" 
};

export default SAXS;