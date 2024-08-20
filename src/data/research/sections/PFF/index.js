import React from "react";

const PolarizableForceField = {
  title: "Polarizable force field",
  content: (
    <p>
      The potential function is one of the most important ingredients 
      in MD calculations. Many of the current simulations of biomolecular 
      systems are based on a potential function representing the 
      interactions between non-bonded atoms in terms of a Lennard-Jones 
      6-12 potential and fixed atomic partial charge coulomb electrostatics. 
      In our group we normally use the potential function of the{" "}
      <a href="http://pubs.acs.org/isubscribe/journals/jpcbfk/jtext.cgi?jpcbfk/102/i18/html/jp973084f.html">CHARMM</a>{" "}
      biomolecular simulation program. Other 
      similar potential functions are{" "} 
      <a href="http://www.amber.ucsf.edu/amber/amber.html">AMBER</a>, and{" "} 
      <a href="http://igc.ethz.ch/gromos">GROMOS</a>. 
      We think that such simple models, which ignore electronic 
      polarization effects, will be insufficient for understanding 
      the microscopic basis of ion selectivity in biological channels.
      We are currently developing a force 
      field which will include induced polarization (see{" "} 
      <a href="http://scitation.aip.org/getabs/servlet/GetabsServlet?prog=normal&id=JCPSA6000119000006003025000001&idtype=cvips&gifs=yes">Lamoureux et al, 2003</a>,{" "} 
      <a href="http://www.sciencedirect.com/science?_ob=ArticleURL&_udi=B6TFN-4HM7S49-C&_user=5745&_rdoc=1&_fmt=&_orig=search&_sort=d&view=c&_acct=C000001358&_version=1&_urlVersion=0&_userid=5745&md5=b5b32ab701f13fce6648c2e8390ea141">Lamoureux et al, 2005</a>,{" "} 
      <a href="http://pubs.acs.org/doi/full/10.1021/ja806825g">Harder et al, 2009</a>).
    </p>
  ),
  // image: "polarizable_force_field.jpg" 
};

export default PolarizableForceField;

