import React from "react";
import { withPrefix } from "gatsby";

const FEP = {
  title: "Absolute binding free energy",
  content: (
    <>
    <p>
      The calculation of the  standard (absolute) binding free energy of a small ligand to a receptor macromolecule
      is one of the most important problem in computational biophysics.
      In recent years, there have been important advances in methodologies that enable
      one to carry out such calculations with a reasonable accuracy (see{" "}
      <a href={withPrefix("/resources/publications/deng_jpc_2009.pdf")}>Deng and Roux, 2009</a> for a recent review).
    </p>
    <p>
      One approach to compute the binding free energy of a small molecule ligand is to use alchemical FEP/MD.
      (<a href={withPrefix("/resources/publications/deng_jctc_2006.pdf")}>Deng and Roux, 2006</a>).  The free energy associated with the interactions is
      split into repulsive, dispersive and electrostatic contributions.  To accelerate convergence and avoid
      instability in simulations, a soft-core potential is used on the repulsive interaction.
      Various restraining potentials can be used to enhance the sampling and take into
      account of the standard state.  The effect of these
      restraint potentials are removed with extra simulation steps.
      For a typical drug-like ligand, restraint potentials on the
      ligand translation, rotation and conformation degrees of
      freedom are required.  The ligand conformation (measured by RMSD
      from bound conformation) can be calculated using umbrella sampling.
    </p>
    <p>
      Another approach to compute the binding free energy of a small molecule ligand is
      to use a PMF as a function of the ligand-receptor separation (<a href={withPrefix("/resources/publications/Woo_pnas_2005.pdf")}>Woo and Roux, 2004</a>). This work was extended to incorporate a protein conformational PMF in a paper in Nature Structural & Molecular Biology (<a href="http://www.nature.com/nsmb/journal/v18/n3/full/nsmb.2010.html">Lau and Roux, 2011</a>).
      Again, various restraining potentials can be used to enhance the sampling and convergence.
    </p>
    <b>Downloads:</b>
    <ul><b>
      <li><a href={withPrefix("/resources/downloads/FEP/fep_tutorial.tar.gz")} download> Absolute binding free energy calculation from FEP/MD</a></li>
      <li><a href={withPrefix("/resources/downloads/FEP/binding_pmf.tar.gz")} download> Absolute binding free energy calculation from PMF</a></li>
    </b></ul>
    </>
  ),
  // image: "brownian_dynamics.jpg" 
};

export default FEP;