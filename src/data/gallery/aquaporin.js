import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { withPrefix } from "gatsby";
import * as pageStyles from "../../pages/gallery.module.css";

const Aquaporin = {
  title: "Why Protons Don't Go Through Aquaporins",
  media: (
    <StaticImage
      src="../../images/research/chakrabarti1.jpg"
      alt="Aquaporin proton blockage"
      loading="eager"
      className={pageStyles.mediaImage}
      imgClassName={pageStyles.mediaImageImg}
    />
  ),
  description: (
    <>
      <p>
        Water transport channels in membrane proteins of the aquaporin superfamily are impermeable
        to ions, including H<sup>+</sup> and OH<sup>-</sup>. We examine the molecular basis for the blockage of proton
        translocation through the single-file water chain in the pore of a bacterial aquaporin,
        GlpF. Translocation of an excess proton in either direction is opposed by a free-energy
        barrier centered at the NPA region. Both hop and turn steps of proton translocation are
        opposed by the electrostatic field of the channel. Notably, the 10-12-kcal-per-mole barrier
        to proton translocation peaking at the NPA region results from a combination of factors.
        These include not only the orientational control of water molecules but also desolvation
        penalties and electrostatic effects caused by the charge distribution in the channel.
      </p>
      <p>
        N. Chakrabarti, E. Tajkhorshid, B. Roux and R. Pomès, "Molecular Basis of Proton Blockage
        in Aquaporins",{" "}
        <a href="http://www.structure.org/content/article/fulltext?uid=PIIS0969212603002879"><i>Structure</i></a>{" "}
        <b>12</b>, 65-74 (2004).{" "}
        [<a href="http://www.ncbi.nlm.nih.gov:80/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=14725766&dopt=Abstract">PubMed</a>]
      </p>
      <p>
        C&amp;E News by Amanda Yarnell,{" "}
        <a href="http://pubs.acs.org/isubscribe/journals/cen/82/i04/html/8204sci1.html">
          "Blockade in the cell's waterway"
        </a>
      </p>
      <p><b>More on proton wires…</b></p>
      <p>
        R. Pomès and B. Roux, "Quantum Effects on the Structure and Energy of a Protonated Linear
        Chain of Hydrogen-Bonded Water Molecules", <i>Chem. Phys. Lett.</i> <b>234</b>, 416-624 (1995).{" "}
        [<a href={withPrefix("/resources/publications/Pomes_1995.pdf")}>
          pdf
        </a>]
      </p>
      <p>
        R. Pomès and B. Roux, "Theoretical Study of H+ Translocation along a Model Proton Wire",{" "}
        <i>J. Phys. Chem.</i> <b>100</b>, 2519-2527 (1996).{" "}
      </p>
      <p>
        R. Pomès and B. Roux, "Structure and Dynamics of a Proton Wire: A Theoretical Study of
        H<sup>+</sup> Translocation along the Single-File Water Chain in the Gramicidin A Channel",{" "}
        <i>Biophys. J.</i> <b>71</b>, 19-39 (1996).
      </p>
      <p>
        R. Pomès and B. Roux, "Free energy profiles for H+ conduction along hydrogen-bonded chains
        of water molecules", <i>Biophys. J.</i> <b>75</b>, 33-40 (1998).{" "}
        [<a href={withPrefix("/resources/publications/Pomes_Roux_BJ_1998.pdf")}>
          pdf
        </a>]
      </p>
      <p>
        M.F. Schumaker, R. Pomès and B. Roux, "A combined molecular dynamics diffusion model of
        single proton conduction through gramicidin", <i>Biophys. J.</i> <b>79</b>, 2840-2857 (2000).{" "}
        [<a href={withPrefix("/resources/publications/Schumaker_2000.pdf")}>
          pdf
        </a>]
      </p>
      <p>
        M.F. Schumaker, R. Pomès and B. Roux, "Framework Model for Single Proton Conduction
        Through Gramicidin", <i>Biophys. J.</i> <b>80</b>, 12-30 (2001).{" "}
        [<a href={withPrefix("/resources/publications/Schumaker_2001.pdf")}>
          pdf
        </a>]
      </p>
      <p>
        R. Pomès and B. Roux, "Molecular Mechanism of H<sup>+</sup> Conduction in the Single-File
        Water Chain of the Gramicidin Channel", <i>Biophys. J.</i> <b>82</b>, 2304-2316 (2002).{" "}
        [<a href={withPrefix("/resources/publications/Pomes_Roux_BJ_2002.pdf")}>
          pdf
        </a>]
      </p>
    </>
  ),
};

export default Aquaporin;