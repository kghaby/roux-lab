import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as pageStyles from "./research.module.css";

const ResearchPage = () => (
  <Layout>
    <div className={pageStyles.researchPage}>
      <section key={"Summary"} id={"Summary"}>
        <h1><b>Research Projects</b></h1>
        <p>	An important focus of our laboratory is the understanding of the structure 
        and function of ion channels. We are particularly interested 
        in issues about ion permeation, ion selectivity, gating, and 
        channel inhibitors. We are currently working on the KcsA
        channel, the OmpF porin, and the gramicidin A
        channel. We are also spending our efforts in the development 
        of new computational approaches for studying biological macromolecular 
        systems.  <br></br><br></br>
        The computational 
        approach called "molecular dynamics" (MD) is central to our 
        work. It consists of constructing detailed atomic models of 
        the macromolecular system and, having described the microscopic 
        forces with a potential function, using Newton's classical 
        equation, <i>F=MA</i>, to literally "simulate" the dynamical 
        motions of all the atoms as a function of time. The calculated 
        trajectory, though an approximation to the real world, provides 
        detailed information about the time course of the atomic motions, 
        which is impossible to access experimentally.<br></br><br></br>
        In addition, other computational approaches, at different level of complexity 
        and sophistication, can be very useful.  In particular, Poisson-Boltzmann (PB) 
        continuum electrostatic models, in which the influence of the solvent is incorporated implicitly, 
        plays an increasingly important role in estimating the solvation free energy 
        of macromolecular assemblies. <br></br><br></br>
        </p>
      </section>
      <section key={"KcsA"} id={"KcsA"}>
        <h2>KcsA</h2>
          <p>	The determination of the structure of the KcsA K+ channel 
          from <i> Streptomyces lividan </i> has made it possible 
          to investigate the function of a biological channel at the 
          atomic level
          (<a href="http://www.sciencemag.org/cgi/content/full/280/5360/69">Doyle et al, 1998</a>). 
          Because of its structural similarity with 
          eukaryotic K-channels, investigations of KcsA are expected 
          to help understand a large class of biologically important 
          channels. We are currently working on several fundamental 
          aspect of the function of the KcsA channel such as, electrostatics, muti-ion 
          permeation, channel gating, and inhibition by various blocking agents (see 
          <a href="http://www.sciencemag.org/cgi/content/full/285/5424/100"> Roux and MacKinnon, 1999</a>;{` `}
          <a href="http://www.biophysj.org/cgi/content/full/78/6/2900?maxtoshow=&HITS=&hits=&RESULTFORMAT=&fulltext=Roux&searchid=QID_NOT_SET&stored_search=&FIRSTINDEX=&volume=78&issue=6">Berneche and Roux, 2000</a>;{` `}
          <a href="http://pubs.acs.org/doi/full/10.1021/bi001567v">Roux et al., 2000</a>;{` `}
          <a href="http://www.jgp.org/cgi/content/full/118/2/207">Crouzy, et al, 2001</a>;{` `}
          <a href="http://www.nature.com/nature/journal/v414/n6859/abs/414073a0.html">Berneche and Roux, 2001</a>).</p>
      </section>
      <section key={"OmpF"} id={"OmpF"}>
        <h2>OmpF porin</h2>
        <p>
        The outer membrane of <i>Escherichia coli</i> protects the 
        cell against hostile agents and facilitates the uptake of 
        nutrients. This activity is mediated by macromolecular structures 
        called porins. Porins are not very selective and have only 
        some specificity towards cations or anions. 
        The porins represent ideal systems for addressing the fundamental 
        electrostatics principles governing ion flow in molecular 
        pores. Because high resolution well-characterized structures 
        are available for outer membrane porins of <i>E coli</i>, 
        they provide excellent model channel systems for computations 
        based on detailed atomic models.  We are currently 
        working on the cation-selective matrixporin (OmpF) which 
        is a major component of the E. coli outer membrane.
        </p>
      </section>
      <section key={"Brownian dynamics"} id={"Brownian dynamics"}>
        <h2>Brownian dynamics</h2>
        <p>
        Brownian dynamics provides an attractive computational approach 
        for simulating the permeation of ions over long time-scales 
        without having to treat all the solvent molecules explicitly. 
        The approach consists in integrating stochastic equation 
        of motions with some effective potential which incorporates 
        the systematic influence of the environment. To account 
        for non-equilibrium boundary conditions found in ion channel 
        systems (asymetric ion concentration and transmembrane potential) 
        we have developed a method combining the Grand Canonical 
        Monte Carlo algorithm with Brownian dynamics,  
        GCMC/BD (<a href="http://www.cell.com/biophysj/fulltext/S0006-3495(00)76336-3">Im et al, 2000</a>).
        </p>
      </section>
      <section key={"Implicit solvation methods"} id={"Implicit solvation methods"}>
        <h2>Implicit solvation methods</h2>
        <p>
        MD simulations with explicit solvent molecules are computationally 
        expensive and important properties such as solvation free 
        energies may often converge slowly. Other computational 
        approaches in which the influence of the solvent is incorporated 
        implicitly are needed (see 
        <a href="http://www.sciencedirect.com/science?_ob=ArticleURL&_udi=B6TFB-3WDKWF4-2&_user=492150&_coverDate=04%2F05%2F1999&_rdoc=1&_fmt=summary&_orig=browse&_srch=%23toc%235222%231999%23999219998%2394450!&_cdi=5222&_sort=d&_acct=C000022719&_version=1&_urlVersion=0&_userid=492150&md5=2a34e056246aff04a03247453b324cf2">Roux and Simonson, 1999</a>). Those include continuum electrostatics 
        based on the Poisson-Boltzmann (PB) equations (<a href="http://pubs.acs.org/doi/full/10.1021/jp970736r">Nina et al., 1997</a>), 
        stochastic Brownian Dynamics
        (<a href="http://www.cell.com/biophysj/fulltext/S0006-3495(00)76336-3">Im et al., 2000</a>), and mean-field theories based on statistical mechanical integral equations.
        </p>
      </section>
      <section key={"Polarizable force field"} id={"Polarizable force field"}>
        <h2>Polarizable force field</h2>
        <p>
        The potential function is one of the most important ingredients 
        in MD calculations. Many of the current simulations of biomolecular 
        systems are based on a potential function representing the 
        interactions between non-bonded atoms in terms of a Lennard-Jones 
        6-12 potential and fixed atomic partial charge coulomb electrostatics. 
        In our group we normally use the potential function of the 
        <a href="http://pubs.acs.org/isubscribe/journals/jpcbfk/jtext.cgi?jpcbfk/102/i18/html/jp973084f.html"> CHARMM </a> 
        biomolecular simulation program. Other 
        similar potential functions are 
        <a href="http://www.amber.ucsf.edu/amber/amber.html"> AMBER </a> , and 
        <a href="http://igc.ethz.ch/gromos"> GROMOS </a>. 
        We think that such simple models, which ignore electronic 
        polarization effects, will be insufficient for understanding 
        the microscopic basis of ion selectivity in biological channels.
        We are currently developing a force 
        field which will include induced polarization (see
        <a href="http://scitation.aip.org/getabs/servlet/GetabsServlet?prog=normal&id=JCPSA6000119000006003025000001&idtype=cvips&gifs=yes">Lamoureux et al, 2003</a>, 
        <a href="http://www.sciencedirect.com/science?_ob=ArticleURL&_udi=B6TFN-4HM7S49-C&_user=5745&_rdoc=1&_fmt=&_orig=search&_sort=d&view=c&_acct=C000001358&_version=1&_urlVersion=0&_userid=5745&md5=b5b32ab701f13fce6648c2e8390ea141">Lamoureux et al, 2005</a>, 
        <a href="http://pubs.acs.org/doi/full/10.1021/ja806825g">Harder et al, 2009</a>).
        </p>
      </section>
      <section key={"Free energy simulations"} id={"Free energy simulations"}>
        <h2>Free energy simulations</h2>
        <p>
        By and large, microscopic processes such as ion permeation, 
        macromolecular conformational changes, ligand binding specificity, 
        and protein-protein association are driven thermodynamically 
        by the free energy (or potential of mean force) in diverse 
        and complex environments such as bulk aqueous solution, 
        the active site of an enzyme, the interior of an ion channel, 
        or a bilayer membrane. A quantitative determination of free 
        energies is thus a problem of central importance in theoretical 
        biophysics.  We are currently developing and extending current methodologies 
        to allow precise and computationally inexpensive free energy calculations 
        (see <a href="http://ojps.aip.org/journals/doc/JCPSA6-ft/vol_111/iss_8/3387_1.html">Pomes et al, 1999</a>,
        <a href="http://pubs.acs.org/doi/full/10.1021/jp994193s">Shobana et al, 2000</a>,
        <a href="http://www.cell.com/biophysj/retrieve/pii/S0006349506719944">Wang et al, 2006</a>,
        <a href="http://pubs.acs.org/doi/full/10.1021/jp807701h">Deng and Roux, 2009</a>).
        </p>
      </section>
      <section key={"Experimental research"} id={"Experimental research"} className={pageStyles.researchSection}>
        <div className={pageStyles.sectionInfo}>
          <h2>Experimental research</h2>
          <p>
          Our group includes a fully-equiped experimental lab, performing expression and purification of proteins such as Hck tyrosine kinase and OmpF Porin. These proteins are characterized using X-ray diffractio and SAXS scattering (see <a href="http://www.pnas.org/content/107/36/15757.full">Yang et al, 2010</a>, <a href="http://dx.doi.org/10.1016/j.jmb.2009.11.042">Dhakshnamoorthy et al, 2010</a>).
          </p>
        </div>
        <div className={pageStyles.sectionImage}>
          <StaticImage
            src="../images/collage/roux_exptl.jpg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="In the wet lab"
            style={{ borderRadius: `0.25rem` }}
          />
        </div>
      </section>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Research" />

export default ResearchPage
