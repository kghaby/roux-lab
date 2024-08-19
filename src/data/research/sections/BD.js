import React from "react";

const BD = {
  title: "Brownian dynamics",
  content: (
    <p>
      Brownian dynamics provides an attractive computational approach 
      for simulating the permeation of ions over long time-scales 
      without having to treat all the solvent molecules explicitly. 
      The approach consists in integrating stochastic equations 
      of motion with some effective potential which incorporates 
      the systematic influence of the environment. To account 
      for non-equilibrium boundary conditions found in ion channel 
      systems (asymmetric ion concentration and transmembrane potential) 
      we have developed a method combining the Grand Canonical 
      Monte Carlo algorithm with Brownian dynamics,  
      GCMC/BD (<a href="http://www.cell.com/biophysj/fulltext/S0006-3495(00)76336-3">Im et al, 2000</a>).
    </p>
  ),
  // image: "brownian_dynamics.jpg" 
};

export default BD;

