import React from "react";

const Membrane = {
  title: "Membrane builder",
  content: (
    <>
    <p>
      A special 
      protocol was developed to assemble the starting configuration 
      for MD simulations of membrane proteins associated with phospholipid 
      bilayer membranes. The purpose of the protocol is to construct 
      an initial configuration of a protein-membrane complex that 
      is as close as possible to that of an equilibrated system. 
      The construction method was developed by Woolf and Roux and 
      applied to the simulation of the gramicidin A channel, pf1 
      coat protein, melittin and the KcsA potassium channel (Woolf 
      and Roux, 1994; Woolf and Roux, 1996, Berneche et al., 1998; 
      Berneche and Roux, 2000). This approach represents an extension 
      of the work of Pastor and co-workers to investigate pure lipid 
      bilayers (Pastor et al., 1991; Venable et al., 1993).
    </p>
    <p>
      Our general 
      strategy for creating a reasonable starting configuration 
      for the protein phospholipid system consists in randomly selecting 
      lipids from a pre-equilibrated and pre-hydrated set, placing 
      them around the protein, and finally reducing the number of 
      core-core overleaps between heavy atoms through systematic 
      rotations (around the Z-axis) and translations (in the XY 
      plane) of the lipids and protein. To provide the initial XY 
      positions for each lipid, the full molecules are first represented 
      as single effective particles corresponding to the average 
      cross-section area of a single phospholipid. The packing of 
      the effective lipid particles around the protein is determined 
      from a MD simulation in which the large effective particles 
      are harmonicaly restrained at a given value of Z and moving 
      in the XY plane with periodic boundary conditions.
    </p>
    <b>Download:</b>
    <ul><b>
      <li><a href="/resources/downloads/membrane/membrane.tar.gz" download> Building the melittin/DMPC system </a></li>
      <li><a href="/resources/downloads/membrane/dmpc.tar.gz" download> Library of pre-equilibrated/pre-hydrated DMPC </a></li> 
      <li><a href="/resources/downloads/membrane/dppc.tar.gz" download> Library of pre-equilibrated/pre-hydrated DPPC </a></li> 
      <li><a href="/resources/downloads/membrane/membrane_allen.tar.gz" download> Building DMPC/DPPC/DOPC around a general shape Protein </a></li>
    </b></ul>
    </>
  ),
  // image: "brownian_dynamics.jpg" 
};

export default Membrane;