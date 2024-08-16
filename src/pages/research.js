import * as React from "react"
import { Link } from "gatsby"

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
      <section key={"Topics"} id={"Topics"}>
        <h3><b>Research Topics:</b></h3>
          <ul>
            <li><a href="sub/research/kcsa.html">KcsA</a></li>
            <li><a href="sub/research/ompf.html">OmpF porin</a></li>
            <li><a href="sub/research/bd.html">Brownian dynamics</a></li>
            <li><a href="sub/research/is.html">Implicit solvation methods</a></li>
            <li><a href="sub/research/pff.html">Polarizable force field</a></li>
            <li><a href="sub/research/fe.html">Free energy simulations</a></li>
            <li><a href="sub/research/exp.html">Experimental research</a></li>
          </ul>
      </section>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Research" />

export default ResearchPage
