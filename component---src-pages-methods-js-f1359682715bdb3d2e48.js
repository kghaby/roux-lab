(self.webpackChunkroux_lab=self.webpackChunkroux_lab||[]).push([[397],{4121:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(7294),o=n(1883),r=n(9060);var l=e=>{let{density:t=1}=e;const n=(0,a.useRef)(null);return(0,a.useEffect)((()=>{const e=[],a=n.current;a.width=window.innerWidth,a.height=Math.max(window.innerHeight,window.innerWidth);const o=Math.ceil(Math.sqrt(Math.floor(a.width*a.height)/1e4)*t);console.log("numWaters:",o);const r=20*parseFloat(getComputedStyle(document.documentElement).fontSize);function l(){const t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),l=document.createElement("div"),i=e=>1+4*(1-e),s=e=>.1+.9*(1-e),c=Math.random(),d=i(c),m=s(c),u=.96*d/1.5,h=2*Math.random()*Math.PI,f=h+104.5*Math.PI/180,p=u*Math.cos(h),g=u*Math.sin(h),b=u*Math.cos(f),w=u*Math.sin(f),E=Math.PI/2,y=(Math.random()-.5)*E,v=(Math.random()-.5)*E,P=(e,t,n,a,o,r)=>{const l=Math.cos(a),i=Math.sin(a),s=Math.cos(o),c=Math.sin(o),d=Math.cos(r),m=Math.sin(r);let u=e*d-t*m,h=e*m+t*d,f=n*s-u*c;u=u*s+n*c;let p=h*l-f*i;return f=h*i+f*l,[u,p,f]},[x,M,S]=P(p,g,0,y,v,0),[C,B,_]=P(b,w,0,y,v,0),D=c+.05*S,k=i(D),F=s(D),T=c+.05*_,R=i(T),A=s(T);t.className="molecule",n.className="atom oxygen",o.className="atom hydrogen",l.className="atom hydrogen";const z=[255,255,255],I=[211,211,211],N=[219,0,0].map(((e,t)=>e*m+z[t]*(1-m))),j=I.map(((e,t)=>e*F+z[t]*(1-F))),G=I.map(((e,t)=>e*A+z[t]*(1-A)));n.style.backgroundColor=`rgb(${N.join(",")})`,o.style.backgroundColor=`rgb(${j.join(",")})`,l.style.backgroundColor=`rgb(${G.join(",")})`;const q=.75;n.style.width=d*q+"rem",n.style.height=d*q+"rem",n.style.transform=`translateZ(${10*-c}rem)`,o.style.width=1.2*k/1.5*q+"rem",o.style.height=1.2*k/1.5*q+"rem",o.style.transform=`translate3d(${x}rem, ${M}rem, ${10*-D}rem)`,l.style.width=1.2*R/1.5*q+"rem",l.style.height=1.2*R/1.5*q+"rem",l.style.transform=`translate3d(${C}rem, ${B}rem, ${10*-T}rem)`;const X=98*Math.random()+1,H=Math.random()*(a.height+r);t.style.transform=`translate(${X}vw, ${H}px)`,t.appendChild(n),t.appendChild(o),t.appendChild(l);const O=.5*(1-c);e.push({element:t,speed:O,posX:X,posY:H})}for(let t=0;t<o;t++)l();e.sort(((e,t)=>e.speed-t.speed)),e.forEach((e=>{a.appendChild(e.element)}));const i=()=>{const t=window.scrollY;e.forEach((e=>{const{element:n,speed:o,posX:l,posY:i}=e;let s=i-t*o%(a.height+r);s>a.height+r/2&&(s-=a.height+r),s<-r/2&&(s+=a.height+r),n.style.transform=`translate(${l}vw, ${s}px)`}))};return i(),window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i),e.forEach((e=>a.removeChild(e.element))),e.length=0}}),[t]),a.createElement("div",{ref:n,className:"waterBackground"})};var i=e=>{var t;let{children:n}=e;const i=(0,o.useStaticQuery)("3649515864");return(0,a.useEffect)((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")}))}));return document.querySelectorAll(".hidden").forEach((t=>e.observe(t))),()=>{e.disconnect()}}),[]),a.createElement("div",{className:"siteWrapper"},a.createElement(l,{density:10}),a.createElement(r.Z,{siteTitle:(null===(t=i.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),a.createElement("main",{className:"mainContent"},n),a.createElement("footer",{className:"footer"},a.createElement("p",null,"© ",(new Date).getFullYear()," Roux Lab | University of Chicago")))}},9357:function(e,t,n){"use strict";var a=n(7294),o=n(1883);t.Z=function(e){var t,n;let{description:r,title:l,children:i}=e;const{site:s}=(0,o.useStaticQuery)("63159454"),c=r||s.siteMetadata.description,d=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,d?`${l} | ${d}`:l),a.createElement("meta",{name:"description",content:c}),a.createElement("meta",{property:"og:title",content:l}),a.createElement("meta",{property:"og:description",content:c}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=s.siteMetadata)||void 0===n?void 0:n.author)||""}),a.createElement("meta",{name:"twitter:title",content:l}),a.createElement("meta",{name:"twitter:description",content:c}),i)}},1512:function(e,t,n){"use strict";n.r(t);var a=n(7294),o=n(1883);const r={title:"Absolute binding free energy",content:a.createElement(a.Fragment,null,a.createElement("p",null,"The calculation of the  standard (absolute) binding free energy of a small ligand to a receptor macromolecule is one of the most important problem in computational biophysics. In recent years, there have been important advances in methodologies that enable one to carry out such calculations with a reasonable accuracy (see"," ",a.createElement("a",{href:(0,o.withPrefix)("/resources/publications/deng_jpc_2009.pdf")},"Deng and Roux, 2009")," for a recent review)."),a.createElement("p",null,"One approach to compute the binding free energy of a small molecule ligand is to use alchemical FEP/MD. (",a.createElement("a",{href:(0,o.withPrefix)("/resources/publications/deng_jctc_2006.pdf")},"Deng and Roux, 2006"),").  The free energy associated with the interactions is split into repulsive, dispersive and electrostatic contributions.  To accelerate convergence and avoid instability in simulations, a soft-core potential is used on the repulsive interaction. Various restraining potentials can be used to enhance the sampling and take into account of the standard state.  The effect of these restraint potentials are removed with extra simulation steps. For a typical drug-like ligand, restraint potentials on the ligand translation, rotation and conformation degrees of freedom are required.  The ligand conformation (measured by RMSD from bound conformation) can be calculated using umbrella sampling."),a.createElement("p",null,"Another approach to compute the binding free energy of a small molecule ligand is to use a PMF as a function of the ligand-receptor separation (",a.createElement("a",{href:(0,o.withPrefix)("/resources/publications/Woo_pnas_2005.pdf")},"Woo and Roux, 2004"),"). This work was extended to incorporate a protein conformational PMF in a paper in Nature Structural & Molecular Biology (",a.createElement("a",{href:"http://www.nature.com/nsmb/journal/v18/n3/full/nsmb.2010.html"},"Lau and Roux, 2011"),"). Again, various restraining potentials can be used to enhance the sampling and convergence."),a.createElement("b",null,"Downloads:"),a.createElement("ul",null,a.createElement("b",null,a.createElement("li",null,a.createElement("a",{href:(0,o.withPrefix)("/resources/downloads/FEP/fep_tutorial.tar.gz"),download:!0}," Absolute binding free energy calculation from FEP/MD")),a.createElement("li",null,a.createElement("a",{href:(0,o.withPrefix)("/resources/downloads/FEP/binding_pmf.tar.gz"),download:!0}," Absolute binding free energy calculation from PMF")))))};t.default=r},5804:function(e,t,n){"use strict";n.r(t);var a=n(7294),o=n(8032),r=n(1883);const l={title:"Grand canonical monte carlo Brownian dynamics (GCMC/BD)",content:a.createElement(a.Fragment,null,a.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"flex-start",gap:"1rem",justifyContent:"center"}},a.createElement("div",{style:{flex:"1 1 65%",margin:0}},a.createElement("p",null,"The flow of ions through channels can often be well-represented on the basis of Brownian motion. A novel computational algorithm based on Grand Canonical Monte Carlo (GCMC) and Brownian Dynamics (BD) has been developed to simulate the movement of ions in membrane channels. The proposed GCMC/BD algorithm allows the simulation of ion channels with a realistic implementation of boundary conditions of concentration and transmembrane potential. The method is illustrated with simulations of simple test systems and of the OmpF porin of ",a.createElement("i",null,"E coli"),".",a.createElement("br",null),a.createElement("br",null),'W. IM, S. SEEFELD and B. ROUX, "A grand canonical monte carlo-Brownian dynamics algorithm for simulating ion channels",'," ",a.createElement("a",{href:"http://www.biophysj.org/cgi/content/full/79/2/788?maxtoshow=&HITS=&hits=&RESULTFORMAT=&fulltext=Roux&searchid=QID_NOT_SET&stored_search=&FIRSTINDEX=&volume=79&issue=2"},a.createElement("i",null,"Biophys. J."))," ",a.createElement("b",null,"  79"),", 788-801 (2000). [",a.createElement("a",{href:"http://www.ncbi.nlm.nih.gov:80/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=10920012&dopt=Abstract"},"PubMed"),"] [",a.createElement("a",{href:(0,r.withPrefix)("/resources/publications/Im_Seefeld_Roux_2000.pdf")},"pdf"),"]",a.createElement("br",null),a.createElement("br",null),'W. IM and B. ROUX, "Ion Permeation and Selectivity of OmpF Porin:  A Theoretical Study Based on Molecular Dynamics, Brownian Dynamics,  and Continuum Electrodiffusion Theory.",'," ",a.createElement("a",{href:"http://www.sciencedirect.com/science?_ob=ArticleURL&_udi=B6WK7-46SNK20-P&_coverDate=09%2F27%2F2002&_alid=88621411&_rdoc=1&_fmt=&_orig=search&_qd=1&_cdi=6899&_sort=d&view=c&_acct=C000022719&_version=1&_urlVersion=0&_userid=492150&md5=6509f386f8c9020388a4a65dac3323b6"},a.createElement("i",null,"J. Mol. Biol."))," ",a.createElement("b",null," 322"),", 851-869 (2002). [",a.createElement("a",{href:"http://www.ncbi.nlm.nih.gov:80/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=12270719&dopt=Abstract"},"PubMed"),"] [",a.createElement("a",{href:(0,r.withPrefix)("/resources/publications/Im_Roux_JMB_2002b.pdf")},"pdf"),"]")),a.createElement(o.S,{src:"../../../../images/research/gcmc_bd.jpg",alt:"GCMC/BD",loading:"lazy",width:250,style:{borderRadius:"0.25rem",margin:"0.5rem",marginBottom:"2rem"},__imageData:n(5381)})),a.createElement("b",null,"Downloads:"),a.createElement("ul",null,a.createElement("li",null,a.createElement("b",null,a.createElement("a",{href:(0,r.withPrefix)("/resources/downloads/GCMC/gcmc-bd.tar.gz"),download:!0}," GCMC/BD program with examples and documentation ")))))};t.default=l},8049:function(e,t,n){"use strict";n.r(t);var a=n(7294);const o={title:"Molecular dynamics free energy simulation (MD/FES)",content:a.createElement(a.Fragment,null)};t.default=o},652:function(e,t,n){"use strict";n.r(t);var a=n(7294),o=n(1883);const r={title:"Poisson-Boltzmann module (PBEQ)",content:a.createElement(a.Fragment,null,a.createElement("p",null,"Continuum electrostatics, in which thesolvent is represented as a featureless dielectric medium, is an increasingly popular approach to describe solvation of polar molecules. The approximation goes back to Born (1920), Kirkwood (1934), and Onsager (1936). Continuum electrostatic approximations are based upon the Poisson Boltzmann equation for macroscopic media. The approach is of particular interest for incorporating solvent effects implicitly in atomic models of biomolecules. Numerical solutions of the PB equation based on finite-difference can be obtained routinely in the case of molecules of arbitrary irregular shapes."),a.createElement("p",null,"One of the most important aspect of PB calculations is the atomic radii used to define the location of the solvent-protein dielectric boundary. We have determine a set of atomic Born radii for all 20 amino acids using MD/FES simulations with explicit water molecules (Nina et al, 1997)."),a.createElement("p",null,"In most practical applications, the PB equation is solved numerically for a fixed conformation of the biomolecular to obtain the electrostatic solvation free energy, shifts in pKa for specific residues, and protein-protein interactions in solution. The electrostatic solvation forces (i.e., the first derivatives of the solvation free energy with respect to the atomic coordinates of the solute), can also be calculated to implement energy minimization and dynamical algorithms. Lastly, the influence of the transmembrane potential can be incorporated into the theory easily using a modified form of the PB equation."),a.createElement("p",null,a.createElement("a",{href:"https://www.charmm-gui.org/charmmdoc/pbeq.html"}," PBEQ module in CHARMM")),a.createElement("b",null,"Downloads:"),a.createElement("ul",null,a.createElement("b",null,a.createElement("li",null,a.createElement("a",{href:(0,o.withPrefix)("/resources/downloads/PBEQ/radius.str"),download:!0}," Set of atomic Born radii for the 20 standard amino acids ")),a.createElement("li",null,a.createElement("a",{href:(0,o.withPrefix)("/resources/downloads/PBEQ/radii_prot_na.str"),download:!0}," Complete set of atomic Born radii for proteins and nucleic acids ")),a.createElement("li",null,a.createElement("a",{href:(0,o.withPrefix)("/resources/downloads/PBEQ/solvation.tar.gz"),download:!0}," Calculate the electrostatic solvation free energy  ")),a.createElement("li",null,a.createElement("a",{href:(0,o.withPrefix)("/resources/downloads/PBEQ/pka.tar.gz"),download:!0}," Calculate a pKa shift ")),a.createElement("li",null,a.createElement("a",{href:(0,o.withPrefix)("/resources/downloads/PBEQ/binding.tar.gz"),download:!0},"Calculate protein-protein binding ")),a.createElement("li",null,a.createElement("a",{href:(0,o.withPrefix)("/resources/downloads/PBEQ/voltage.tar.gz"),download:!0},"Calculate the transmembrane potential across the KcsA K+ channel ")),a.createElement("li",null,a.createElement("a",{href:(0,o.withPrefix)("/resources/downloads/PBEQ/pbforce.tar.gz"),download:!0},"Simulation with analytical electrostatic solvation forces ")))))};t.default=r},7849:function(e,t,n){"use strict";n.r(t);var a=n(7294);const o={title:"Umbrella sampling potential of mean force (PMF/WHAM)",content:a.createElement(a.Fragment,null)};t.default=o},9108:function(e,t,n){"use strict";n.r(t);var a=n(7294),o=n(1883);const r={title:"Three-dimensional Poisson-Nersnt-Planck (3dPNP)",content:a.createElement(a.Fragment,null,a.createElement("p",null,"Electrodiffusion theory is a useful approach to describe the flow of ions through aqueous channels.  The PNP theory is based on a mean-field continuum electrostatic approximation. The theory solves self-consistently for the non-equilibrium ion density (from Fick's law) and the electrostatic potential (from Poisson's equation). It is valid only for fairly wide aqueous pores. The results from three-dimensional (3d) PNP have been compared to those from the GCMC/BD algorithm in the case of the OmpF porin from ",a.createElement("i",null,"E. coli"),"."),a.createElement("b",null,"Downloads:"),a.createElement("ul",null,a.createElement("b",null,a.createElement("li",null,a.createElement("a",{href:(0,o.withPrefix)("/resources/downloads/PNP/pbpnp.tar.gz"),download:!0}," PNP program with examples and documentation ")))))};t.default=r},8082:function(e,t,n){"use strict";n.r(t);var a=n(7294),o=n(1883);const r={title:"Reference interaction site model (RISM)",content:a.createElement(a.Fragment,null,a.createElement("p",null,"Integral equation liquid state theories have a long history in statistical mechanics, starting with John Kirwood in 1935 (see the textbook by McQuarrie for more).  In the case of molecular liquids, the Reference Interaction Site Model (RISM) developed by David Chandler in the 1970's with the Percus-Yevick or hypernetted chain (HNC) closure is a simple and often useful approximation for calculating solvent radial distribution function, potential of mean force, and excess chemical potentials.  Here you will find a fortran program (rism.f) with some examples of input files to carry such calculations."),a.createElement("b",null,"Downloads:"),a.createElement("ul",null,a.createElement("b",null,a.createElement("li",null,a.createElement("a",{href:(0,o.withPrefix)("/resources/downloads/RISM/rism.tar.gz"),download:!0}," RISM program with examples and documentation ")))))};t.default=r},9097:function(e,t,n){"use strict";n.r(t);var a=n(7294),o=n(1883);const r={title:"Fast-SAXS method for small-angle X-ray scattering (SAXS) of proteins",content:a.createElement(a.Fragment,null,a.createElement("p",null,"The development of a fast coarse-grained (CG) method for computing SAXS profiles from a given protein conformation can be advantageous, especially when massive but CG model structures are generated from computer modeling. The Fast-SAXS method is built within the framework of the Debye formalism. Notably, in addition to the introduction of CG structure factors for amino acids, explicit CG water molecules are placed at the protein surface to account for the collective scattering contributions."),a.createElement("p",null,"Clearly, Fast-SAXS takes advantage of the intrinsic low-resolution and CG nature of solution scattering data. It allows rapid scattering determination from a large number of conformations that can be extracted from CG simulations to obtain scattering characterization of protein conformations. The method includes three important elements, (1) effective residue structure factors derived from the Protein Data Bank, (2) explicit treatment of water molecules in the hydration layer at the surface of the protein, and (3) an ensemble average of scattering from a variety of appropriate conformations to account for macromolecular flexibility (At the moment, the ensemble generation is up to users). More details can be found in a recent publication at Biophysical Journal (see ",a.createElement("a",{href:(0,o.withPrefix)("/resources/publications/yang_bj_2009.pdf")},"Yang et al, 2009")," for the methodology)."),a.createElement("p",null,"The codes of the Fast-SAXS calculation can be downloaded from the link as provided below. In this package, an example of the Fast-SAXS calculation using HEW lysozyme is provided to illustrate the general procedure."),a.createElement("b",null,"Downloads:"),a.createElement("ul",null,a.createElement("b",null,a.createElement("li",null,a.createElement("a",{href:(0,o.withPrefix)("/resources/downloads/SAXS/Fast-SAXS.v1.tar.gz"),download:!0},"Fast-SAXS for proteins")))))};t.default=r},9665:function(e,t,n){"use strict";n.r(t);var a=n(7294),o=n(1883);const r={title:"Solvent boundary potentials (SSBP and GSBP)",content:a.createElement(a.Fragment,null,a.createElement("p",null,"A description in which all atomic and structural details of the solvent molecules are ignored (as in PB calculations) may not always be desirable. In some cases, it may be advantageous to use an intermediate approach which consists in keeping a small number of explicit solvent molecules in the vicinity of the solute, and representing the remaining bulk with an effective solvent boundary potential."),a.createElement("p",null,'Separating the multidimensional solute-solvent configurational integral in terms of "inner" solvent molecules nearest to an arbitrary solute, and the remaining "outer" bulk solvent molecules, we showed that the solvent boundary potential corresponds to the solvation free energy of an effective cluster comprising the solute and inner explicit solvent molecules embedded in a large hard sphere (',a.createElement("a",{href:(0,o.withPrefix)("/resources/publications/beglov_jcp_1994.pdf")},"Beglov and Roux, 1994"),")."),a.createElement("p",null,"The hard sphere corresponds to a configurational restriction on the outer bulk solvent molecules; its radius is variable, such that it includes the most distant inner solvent molecule. An approximate Spherical Solvent Boundary Potential, called",a.createElement("b",null," SSBP"),", based on this formulation was shown to yield accurate results in computer simulations. SSBP is meant to simulate solutes surrounded by bulk isotropic solvent.  To simulate a small region of a protein or active site, the Generalized Solvent Boundary Potential, called ",a.createElement("b",null," GSBP"),", was developed (",a.createElement("a",{href:(0,o.withPrefix)("/resources/publications/Im_Berneche_Roux_gsbp2001.pdf")},"Im et al, 2001"),"). To properly equilibrate the finite GSBP region, a grand canonical monte carlo method, called ",a.createElement("b",null,"GCMC"),", was developed."),a.createElement("p",null,"GSBP with GCMC is a powerful strategy for computing absolute binding free energy of ligands in buried sites (",a.createElement("a",{href:(0,o.withPrefix)("/resources/publications/deng_jcp2008.pdf")},"Deng and Roux, 2008"),")."),a.createElement("p",null,"All of these methods have been implemented in ",a.createElement("a",{href:"http://yuri.harvard.edu"},a.createElement("b",null,"CHARMM")),"."),a.createElement("b",null,"Downloads:"),a.createElement("ul",null,a.createElement("b",null,a.createElement("li",null,a.createElement("a",{href:(0,o.withPrefix)("/resources/downloads/SBP/ssbp.tar.gz"),download:!0}," Electrostatic solvation free energy of alanine dipeptide in water using SSBP ")),a.createElement("li",null,a.createElement("a",{href:(0,o.withPrefix)("/resources/downloads/SBP/gsbp_june2005.tar.gz"),download:!0}," Electrostatic free energy of aspartic acid in aspartyl-t-RNA synthase using GSBP")),a.createElement("li",null,a.createElement("a",{href:(0,o.withPrefix)("/resources/downloads/SBP/gcmc_june2005.tar.gz"),download:!0}," Basic GCMC examples with water")),a.createElement("li",null,a.createElement("a",{href:(0,o.withPrefix)("/resources/downloads/FEP/fep_tutorial.tar.gz"),download:!0}," Absolute binding free energy calculations with GSBP and GCMC.")))))};t.default=r},1460:function(e,t,n){"use strict";n.r(t);var a=n(7294),o=n(1883);const r={title:"Common ion parameters for CHARMM",content:a.createElement("div",{style:{width:"100%"}},a.createElement("b",null,"Downloads:"),a.createElement("ul",null,a.createElement("li",null,a.createElement("b",null,a.createElement("a",{href:(0,o.withPrefix)("/resources/downloads/ions/ions.dat"),download:!0},"ions.dat")))))};t.default=r},9173:function(e,t,n){"use strict";n.r(t);var a=n(7294),o=n(1883);const r={title:"Membrane builder",content:a.createElement(a.Fragment,null,a.createElement("p",null,"A special protocol was developed to assemble the starting configuration for MD simulations of membrane proteins associated with phospholipid bilayer membranes. The purpose of the protocol is to construct an initial configuration of a protein-membrane complex that is as close as possible to that of an equilibrated system. The construction method was developed by Woolf and Roux and applied to the simulation of the gramicidin A channel, pf1 coat protein, melittin and the KcsA potassium channel (Woolf and Roux, 1994; Woolf and Roux, 1996, Berneche et al., 1998; Berneche and Roux, 2000). This approach represents an extension of the work of Pastor and co-workers to investigate pure lipid bilayers (Pastor et al., 1991; Venable et al., 1993)."),a.createElement("p",null,"Our general strategy for creating a reasonable starting configuration for the protein phospholipid system consists in randomly selecting lipids from a pre-equilibrated and pre-hydrated set, placing them around the protein, and finally reducing the number of core-core overleaps between heavy atoms through systematic rotations (around the Z-axis) and translations (in the XY plane) of the lipids and protein. To provide the initial XY positions for each lipid, the full molecules are first represented as single effective particles corresponding to the average cross-section area of a single phospholipid. The packing of the effective lipid particles around the protein is determined from a MD simulation in which the large effective particles are harmonicaly restrained at a given value of Z and moving in the XY plane with periodic boundary conditions."),a.createElement("b",null,"Download:"),a.createElement("ul",null,a.createElement("b",null,a.createElement("li",null,a.createElement("a",{href:(0,o.withPrefix)("/resources/downloads/membrane/membrane.tar.gz"),download:!0}," Building the melittin/DMPC system ")),a.createElement("li",null,a.createElement("a",{href:(0,o.withPrefix)("/resources/downloads/membrane/dmpc.tar.gz"),download:!0}," Library of pre-equilibrated/pre-hydrated DMPC ")),a.createElement("li",null,a.createElement("a",{href:(0,o.withPrefix)("/resources/downloads/membrane/dppc.tar.gz"),download:!0}," Library of pre-equilibrated/pre-hydrated DPPC ")),a.createElement("li",null,a.createElement("a",{href:(0,o.withPrefix)("/resources/downloads/membrane/membrane_allen.tar.gz"),download:!0}," Building DMPC/DPPC/DOPC around a general shape Protein ")))))};t.default=r},6488:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return d},default:function(){return m}});var a=n(5785),o=n(7294),r=n(7896),l=n(4121),i=n(9357);var s=o.createElement(o.Fragment,null,o.createElement("p",null," A significant fraction of our work involves the biomolecular simulation program CHARMM. ",o.createElement("br",null),"The academic version of"," ",o.createElement("a",{href:"http://yuri.harvard.edu"},"CHARMM")," is distributed by Martin Karplus at Harvard.",o.createElement("br",null),"The commercial version of"," ",o.createElement("a",{href:"http://accelrys.com/products/scitegic/component-collections/charmm.html"},"CHARMM")," ","is distributed by Accelrys.")),c=n(1271);const d=()=>o.createElement(i.Z,{title:"Methods"});var m=()=>{const{0:e,1:t}=(0,o.useState)([]),{0:i,1:d}=(0,o.useState)([]),m=(0,o.useRef)({}),u=(0,r.useLocation)();(0,o.useEffect)((()=>{const e=(()=>{const e=n(1959);return e.keys().map((t=>{const n=e(t).default,a=t.split("/")[1];return{...n,key:a,id:a.replace(/\s+/g,"_").replace(/[^\w-]+/g,"")}})).sort(((e,t)=>e.title.localeCompare(t.title)))})(),a=parseFloat(getComputedStyle(document.documentElement).fontSize),o=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height"));t(e);const r=u.hash.replace("#","");if(r){const e=r.split("||");d(e),setTimeout((()=>{if(e.length>0){const t=m.current[e[0]];if(t){const e=t.getBoundingClientRect().top+window.scrollY,n=o*a;window.scrollTo({top:e-n,behavior:"instant"})}}}),1)}}),[u.hash]);const h=e=>{d((t=>{let n;if(n=t.includes(e)?t.filter((t=>t!==e)):[].concat((0,a.Z)(t),[e]),0===n.length)window.history.replaceState({},"",window.location.pathname);else{const e=n.join("||");window.history.replaceState({},"",`#${e}`)}return n}))};return o.createElement(l.Z,null,o.createElement("div",{className:c.Hw},o.createElement("section",{key:"Summary",id:"Summary"},o.createElement("h1",null,o.createElement("b",null,"Methodological Developments")),s),e.map((e=>o.createElement("section",{key:e.key,id:e.id,ref:t=>m.current[e.id]=t},o.createElement("div",{onClick:()=>h(e.id),onKeyDown:t=>((e,t)=>{"Enter"!==e.key&&" "!==e.key||h(t.id)})(t,e),className:c.tR,role:"button",tabIndex:0,"aria-label":"Toggle section","aria-expanded":i.includes(e.id)},o.createElement("h2",{style:{display:"flex"}},o.createElement("span",{className:c.kE},i.includes(e.id)?"-":"+"),o.createElement("span",{className:c.Du},e.title))),i.includes(e.id)&&o.createElement("div",{className:c.z5},o.createElement("div",{className:c.U0},e.content)))))))}},1271:function(e,t,n){"use strict";n.d(t,{Du:function(){return l},Hw:function(){return s},U0:function(){return i},el:function(){return c},kE:function(){return r},tR:function(){return o},z5:function(){return a}});var a="sectioned-module--pageSection--4dd76",o="sectioned-module--sectionHeader--1c035",r="sectioned-module--sectionHeaderIndicator--f214b",l="sectioned-module--sectionHeaderTitle--a7a65",i="sectioned-module--sectionInfo--2fa4e",s="sectioned-module--sectionedPage--91a4c",c="sectioned-module--uLinks--8cd8e"},1959:function(e,t,n){var a={"./FEP/index.js":1512,"./GCMC/index.js":5804,"./MD/index.js":8049,"./PBEQ/index.js":652,"./PMF/index.js":7849,"./PNP/index.js":9108,"./RISM/index.js":8082,"./SAXS/index.js":9097,"./SBP/index.js":9665,"./ions/index.js":1460,"./membrane/index.js":9173};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=1959},5381:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/roux-lab/static/19213d42969ed9f699438beab8e7feb8/661b8/gcmc_bd.jpg","srcSet":"/roux-lab/static/19213d42969ed9f699438beab8e7feb8/c1102/gcmc_bd.jpg 63w,\\n/roux-lab/static/19213d42969ed9f699438beab8e7feb8/4e6db/gcmc_bd.jpg 125w,\\n/roux-lab/static/19213d42969ed9f699438beab8e7feb8/661b8/gcmc_bd.jpg 250w","sizes":"(min-width: 250px) 250px, 100vw"},"sources":[{"srcSet":"/roux-lab/static/19213d42969ed9f699438beab8e7feb8/dc290/gcmc_bd.webp 63w,\\n/roux-lab/static/19213d42969ed9f699438beab8e7feb8/399b1/gcmc_bd.webp 125w,\\n/roux-lab/static/19213d42969ed9f699438beab8e7feb8/d23ae/gcmc_bd.webp 250w","type":"image/webp","sizes":"(min-width: 250px) 250px, 100vw"}]},"width":250,"height":345}')}}]);
//# sourceMappingURL=component---src-pages-methods-js-f1359682715bdb3d2e48.js.map