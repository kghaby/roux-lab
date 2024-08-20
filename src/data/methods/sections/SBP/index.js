import React from "react";

const SBP = {
  title: "Solvent boundary potentials (SSBP and GSBP)",
  content: (
    <>
    <p>
      A description 
      in which all atomic and structural details of the solvent 
      molecules are ignored (as in PB calculations) may not always 
      be desirable. In some cases, it may be advantageous to use 
      an intermediate approach which consists in keeping a small 
      number of explicit solvent molecules in the vicinity of the 
      solute, and representing the remaining bulk with an effective 
      solvent boundary potential.
    </p>
    <p>
      Separating the multidimensional solute-solvent configurational integral 
      in terms of &quot;inner&quot; solvent molecules nearest to an 
      arbitrary solute, and the remaining &quot;outer&quot; bulk solvent 
      molecules, we showed that the solvent boundary potential corresponds 
      to the solvation free energy of an effective cluster comprising 
      the solute and inner explicit solvent molecules embedded in 
      a large hard sphere (<a href="/resources/publications/beglov_jcp_1994.pdf">Beglov and Roux, 1994</a>). 
    </p>
    <p>
      The hard sphere corresponds to a configurational restriction on the outer 
      bulk solvent molecules; its radius is variable, such that 
      it includes the most distant inner solvent molecule. An approximate 
      Spherical Solvent Boundary Potential, called<b> SSBP</b>, 
      based on this formulation was shown to yield accurate results 
      in computer simulations. SSBP is meant to simulate solutes surrounded by bulk
      isotropic solvent.  To simulate a small region of a protein or active site, the Generalized 
      Solvent Boundary Potential, called <b> GSBP</b>, was developed 
      (<a href="/resources/publications/Im_Berneche_Roux_gsbp2001.pdf">Im et al, 2001</a>).
      To properly equilibrate the finite GSBP region, a grand canonical monte carlo method, called <b>GCMC</b>, was developed.
    </p>
    <p>
      GSBP with GCMC is a powerful strategy for computing absolute binding free energy of ligands in buried sites
      (<a href="/resources/publications/deng_jcp2008.pdf">Deng and Roux, 2008</a>).
    </p>
    <p>
      All of these methods have been implemented in <a href="http://yuri.harvard.edu"><b>CHARMM</b></a>.
    </p>
    <b>Downloads:</b>
    <ul><b>
      <li><a href="/resources/downloads/SBP/ssbp.tar.gz" download> Electrostatic solvation free energy of alanine dipeptide in water using SSBP </a></li>
      <li><a href="/resources/downloads/SBP/gsbp_june2005.tar.gz" download> Electrostatic free energy of aspartic acid in aspartyl-t-RNA synthase using GSBP</a></li>
      <li><a href="/resources/downloads/SBP/gcmc_june2005.tar.gz" download> Basic GCMC examples with water</a></li>
      <li><a href="/resources/downloads/FEP/fep_tutorial.tar.gz" download> Absolute binding free energy calculations with GSBP and GCMC.</a></li>
    </b></ul>
    </>
  ),
  // image: "brownian_dynamics.jpg" 
};

export default SBP;