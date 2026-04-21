import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { withPrefix } from "gatsby";
import * as pageStyles from "../../pages/gallery.module.css";

const BernecheRouxNature2001 = {
  title: "Ion Conduction Calculations",
  media: (
    <StaticImage
      src="../../images/research/berneche_roux_nature_2001.jpg"
      alt="Ion conduction through K+ channel"
      loading="eager"
      className={pageStyles.mediaImage}
      imgClassName={pageStyles.mediaImageImg}
    />
  ),
  description: (
    <>
      <p>
        The detailed free energy surface governing the microscopic process of ion conduction
        through the selectivity filter of the potassium channel has been calculated using umbrella
        sampling molecular dynamics simulations. The calculations revealed that the ion conduction
        process is essentially barrierless, and that ion-ion repulsion acts only at a relatively
        short distance.
      </p>
      <p>
        S. Bernèche and B. Roux, "Energetics of Ion Conduction through the K+ Channel",{" "}
        <a href="http://www.nature.com/cgi-taf/DynaPage.taf?file=/nature/journal/v414/n6859/full/414073a0_fs.html">
          <i>Nature</i>
        </a>{" "}
        <b>414</b>, 73-77 (2001).{" "}
        [<a href="http://www.ncbi.nlm.nih.gov:80/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=11689945&dopt=Abstract">PubMed</a>]
      </p>
      <p>
        News &amp; Views by Chris Miller,{" "}
        <a href="http://www.nature.com/cgi-taf/DynaPage.taf?file=/nature/journal/v414/n6859/full/414023a0_fs.html">
          "See Potassium Run"
        </a>
      </p>
      <p>
        C&amp;E News by Maureen Rouhi,{" "}
        <a href="http://pubs.acs.org/cen/topstory/7945/7945notw8.html">
          "Potassium ions on the move"
        </a>
      </p>
      <p>
        Access by Kathleen Wong,{" "}
        <a href="http://access.ncsa.uiuc.edu/Stories/ionchannels">"Rush Hour"</a>
      </p>
      <p>
        2003 Success Stories at NCSA by J. William Bell,{" "}
        <a href="http://access.ncsa.uiuc.edu/Stories/Nobel">"Fortifying a Nobel"</a>
      </p>
      <p>
        See also "First study to show that ionic conductance of a selective ion channel can be
        calculated accurately from first principles",{" "}
        <a href="http://www.f1000biology.com/article/12837936/evaluation">Faculty 1000</a>
      </p>
      <p>
        S. Bernèche and B. Roux, "A microscopic view of ion conduction through the K+ channel",{" "}
        <a href="http://www.pnas.org/cgi/content/full/100/15/8644">
          <i>Proc. Natl. Acad. Sci.</i>
        </a>{" "}
        <b>100</b>, 8644-8648 (2003).{" "}
        [<a href="http://www.ncbi.nlm.nih.gov:80/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=12837936&dopt=Abstract">PubMed</a>]
      </p>
    </>
  ),
};

export default BernecheRouxNature2001;