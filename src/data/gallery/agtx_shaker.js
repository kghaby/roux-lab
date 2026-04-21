import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { withPrefix } from "gatsby";
import * as pageStyles from "../../pages/gallery.module.css";

const AgtxShaker = {
  title: "Structure of the Agitoxin-Shaker Complex",
  media: (
    <StaticImage
      src="../../images/research/agtx_shaker.jpg"
      alt="Agitoxin-Shaker complex"
      loading="eager"
      className={pageStyles.mediaImage}
      imgClassName={pageStyles.mediaImageImg}
    />
  ),
  description: (
    <>
      <p>
        Computational methods were used to determine the three-dimensional structure of the
        Agitoxin (AgTx2)-Shaker complex. A large number of models of the complex were generated
        using high temperature molecular dynamics, accounting for side chain flexibility with
        distance restraints deduced from thermodynamic analysis of double mutant cycles. The
        quality and validity of the resulting complexes was assessed by examining the stability
        of the binding modes during molecular dynamics simulations with explicit water molecules
        and by calculating the binding free energies of mutant proteins using a continuum solvent
        representation and comparing with experimental data. In all the models it was found that
        the side chain of Lys27 of the toxin binds deep into the pore, to the S1 cation binding sites.
      </p>
      <p>
        M.A.L. Eriksson and B. Roux, "Modeling the structure of Agitoxin in complex with the
        Shaker K+ channel. A computational approach based on experimental distance restraints
        extracted from thermodynamic mutant cycles",{" "}
        <a href="http://www.biophysj.org/cgi/content/full/83/5/2595"><i>Biophys. J.</i></a>{" "}
        <b>83</b>, 2595-2609 (2002).{" "}
        [<a href="http://www.ncbi.nlm.nih.gov:80/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=12414693&dopt=Abstract">PubMed</a>]{" "}
        [<a href={withPrefix("/resources/publications/AgTx_Shaker_BJ_2002.pdf")}>
          pdf
        </a>]
      </p>
      <p>
        New &amp; Notable by Robert Guy,{" "}
        <a href="http://www.biophysj.org/cgi/content/full/83/5/2325">
          "Computational Simulations of Peptide Binding to Proteins: How Scorpions Sting K+ Channels"
        </a>
      </p>
      <p>
        Download PDB file of{" "}
        <a href={withPrefix("/resources/downloads/models/agtx_shaker_mode_I.pdb")} download>
          "Model I"
        </a>
      </p>
      <p>
        Download PDB file of{" "}
        <a href={withPrefix("/resources/downloads/models/agtx_shaker_mode_II.pdb")} download>
          "Model II"
        </a>{" "}
        (N.B. the agreement with the experimental data is better for mode II than mode I)
      </p>
    </>
  ),
};

export default AgtxShaker;