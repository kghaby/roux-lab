import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { withPrefix } from "gatsby";

const GCMC = {
  title: "Grand canonical monte carlo Brownian dynamics (GCMC/BD)",
  content: (
    <>
    <div style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "flex-start", 
      gap: "1rem", 
      justifyContent: "center",
    }}>
      <div style={{
        flex: "1 1 65%", 
        margin: 0,
      }}>
        <p>
        The flow of ions through channels can often be well-represented
        on the basis of Brownian motion. A novel computational algorithm based on Grand Canonical Monte Carlo (GCMC) and Brownian Dynamics (BD) 
        has been developed to simulate the movement of ions in membrane channels.  
        The proposed GCMC/BD algorithm allows the simulation of ion channels
        with a realistic implementation of boundary conditions of concentration and transmembrane potential.
        The method is illustrated with simulations of simple test systems and of the OmpF porin of <i>E coli</i>.
        <br /><br />

				W. IM, S. SEEFELD and B. ROUX, "A grand canonical monte carlo-Brownian dynamics algorithm for simulating ion channels",{" "}
				<a href="http://www.biophysj.org/cgi/content/full/79/2/788?maxtoshow=&HITS=&hits=&RESULTFORMAT=&fulltext=Roux&searchid=QID_NOT_SET&stored_search=&FIRSTINDEX=&volume=79&issue=2">
				<i>Biophys. J.</i></a> <b>  79</b>, 788-801 (2000). 
				[<a href="http://www.ncbi.nlm.nih.gov:80/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=10920012&dopt=Abstract"> 
				PubMed</a>]  
				[<a href={withPrefix("/resources/publications/Im_Seefeld_Roux_2000.pdf")}>pdf</a>]
        <br /><br />
        
				W. IM and B. ROUX, "Ion Permeation and Selectivity of OmpF Porin:  A Theoretical Study Based on Molecular Dynamics, Brownian Dynamics,  and Continuum Electrodiffusion Theory.",{" "}
				<a href="http://www.sciencedirect.com/science?_ob=ArticleURL&_udi=B6WK7-46SNK20-P&_coverDate=09%2F27%2F2002&_alid=88621411&_rdoc=1&_fmt=&_orig=search&_qd=1&_cdi=6899&_sort=d&view=c&_acct=C000022719&_version=1&_urlVersion=0&_userid=492150&md5=6509f386f8c9020388a4a65dac3323b6">
				<i>J. Mol. Biol.</i></a> <b> 322</b>, 851-869 (2002). 
				[<a href="http://www.ncbi.nlm.nih.gov:80/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=12270719&dopt=Abstract"> 
				PubMed</a>]  
				[<a href={withPrefix("/resources/publications/Im_Roux_JMB_2002b.pdf")}>pdf</a>]

      </p>

      </div>
      <StaticImage 
        src="../../../../images/research/gcmc_bd.jpg" 
        alt="GCMC/BD"
        loading="lazy"
        width={250} 
        style={{
          borderRadius: "0.25rem",
          margin: "0.5rem",
          marginBottom: "2rem",
        }} 
      />
    </div>
    <b>Downloads:</b>
    <ul>
      <li><b><a href={withPrefix("/resources/downloads/GCMC/gcmc-bd.tar.gz")} download> GCMC/BD program with examples and documentation </a></b></li>
    </ul>
    </>
  ),
};

export default GCMC;