import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { withPrefix } from "gatsby";
import * as pageStyles from "../../pages/gallery.module.css";

const TeaJgp2001 = {
  title: "Extracellular Blockade by TEA",
  media: (
    <StaticImage
      src="../../images/research/tea.jpg"
      alt="TEA blockade of KcsA channel"
      loading="eager"
      className={pageStyles.mediaImage}
      imgClassName={pageStyles.mediaImageImg}
    />
  ),
  description: (
    <>
      <p>
        Molecular dynamics and umbrella sampling calculations are used to explore extracellular
        blockade of the KcsA by tetraethylammonium (TEA), a classical blocker of K+ channels. It
        is found, in remarkable agreement with experiment, that TEA is more stably bound when
        there are aromatic residues at position 82. The enhanced stability conferred by the
        aromatic residues does not arise from π-cation interactions as was previously suggested,
        but is due to hydrophobic interactions.
      </p>
      <p>
        S. Crouzy, S. Bernèche and B. Roux, "Extracellular Blockade of K+ Channels by TEA: Results
        from Molecular Dynamics Simulations of the KcsA channel",{" "}
        <a href="http://www.jgp.org/cgi/content/full/118/2/207">
          <i>J. Gen. Physiol.</i>
        </a>{" "}
        <b>118</b>, 207-216 (2001).{" "}
        [<a href="http://www.ncbi.nlm.nih.gov:80/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=11479347&dopt=Abstract">PubMed</a>]
      </p>
    </>
  ),
};

export default TeaJgp2001;