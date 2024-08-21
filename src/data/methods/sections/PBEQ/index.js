import React from "react";
import { withPrefix } from "gatsby";

const PBEQ = {
  title: "Poisson-Boltzmann module (PBEQ)",
  content: (
    <>
    <p>
      Continuum electrostatics, in which thesolvent is represented 
      as a featureless dielectric medium, is an increasingly popular 
      approach to describe solvation of polar molecules. The approximation 
      goes back to Born (1920), Kirkwood (1934), and Onsager 
      (1936). Continuum electrostatic approximations are based upon 
      the Poisson Boltzmann equation for macroscopic media. The 
      approach is of particular interest for incorporating solvent 
      effects implicitly in atomic models of biomolecules. Numerical 
      solutions of the PB equation based on finite-difference can 
      be obtained routinely in the case of molecules of arbitrary 
      irregular shapes.
    </p>
    <p>
      One of the most important aspect of PB calculations is the atomic 
      radii used to define the location of the solvent-protein dielectric 
      boundary. We have determine a set of atomic Born radii for 
      all 20 amino acids using MD/FES simulations with explicit 
      water molecules (Nina et al, 1997).
    </p>
    <p>
      In most practical applications, the PB equation is solved numerically 
      for a fixed conformation of the biomolecular to obtain the 
      electrostatic solvation free energy, shifts in pKa for specific 
      residues, and protein-protein interactions in solution. The 
      electrostatic solvation forces (i.e., the first derivatives 
      of the solvation free energy with respect to the atomic coordinates 
      of the solute), can also be calculated to implement energy 
      minimization and dynamical algorithms. Lastly, the influence 
      of the transmembrane potential can be incorporated into the 
      theory easily using a modified form of the PB equation. 
    </p>
    <p>
    <a href="https://www.charmm-gui.org/charmmdoc/pbeq.html"> PBEQ module in CHARMM</a>
    </p>
    <b>Downloads:</b>
    <ul><b>
      <li><a href={withPrefix("/resources/downloads/PBEQ/radius.str")} download> Set of atomic Born radii for the 20 standard amino acids </a></li>
      <li><a href={withPrefix("/resources/downloads/PBEQ/radii_prot_na.str")} download> Complete set of atomic Born radii for proteins and nucleic acids </a></li>
      <li><a href={withPrefix("/resources/downloads/PBEQ/solvation.tar.gz")} download> Calculate the electrostatic solvation free energy  </a></li>
      <li><a href={withPrefix("/resources/downloads/PBEQ/pka.tar.gz")} download> Calculate a pKa shift </a></li>
      <li><a href={withPrefix("/resources/downloads/PBEQ/binding.tar.gz")} download>Calculate protein-protein binding </a></li>
      <li><a href={withPrefix("/resources/downloads/PBEQ/voltage.tar.gz")} download>Calculate the transmembrane potential across the KcsA K+ channel </a></li>
      <li><a href={withPrefix("/resources/downloads/PBEQ/pbforce.tar.gz")} download>Simulation with analytical electrostatic solvation forces </a></li>
    </b></ul>
    </>
  ),
  // image: "brownian_dynamics.jpg" 
};

export default PBEQ;