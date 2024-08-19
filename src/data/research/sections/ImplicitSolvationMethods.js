import React from "react";

const ImplicitSolvationMethods = {
  title: "Implicit solvation methods",
  content: (
    <p>
      MD simulations with explicit solvent molecules are computationally 
      expensive and important properties such as solvation free 
      energies may often converge slowly. Other computational 
      approaches in which the influence of the solvent is incorporated 
      implicitly are needed (see{" "} 
      <a href="http://www.sciencedirect.com/science?_ob=ArticleURL&_udi=B6TFB-3WDKWF4-2&_user=492150&_coverDate=04%2F05%2F1999&_rdoc=1&_fmt=summary&_orig=browse&_srch=%23toc%235222%231999%23999219998%2394450!&_cdi=5222&_sort=d&_acct=C000022719&_version=1&_urlVersion=0&_userid=492150&md5=2a34e056246aff04a03247453b324cf2">Roux and Simonson, 1999</a>). Those include continuum electrostatics 
      based on the Poisson-Boltzmann (PB) equations (<a href="http://pubs.acs.org/doi/full/10.1021/jp970736r">Nina et al., 1997</a>),{" "}  
      stochastic Brownian Dynamics (<a href="http://www.cell.com/biophysj/fulltext/S0006-3495(00)76336-3">Im et al., 2000</a>), and mean-field theories based on statistical mechanical integral equations.
    </p>
  ),
  // image: "implicit_solvation.jpg"
};

export default ImplicitSolvationMethods;

