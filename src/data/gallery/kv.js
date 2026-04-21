import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { withPrefix } from "gatsby";
import * as pageStyles from "../../pages/gallery.module.css";

const Kv = {
  title: "Voltage-Activated K+ Channels",
  media: (
    <StaticImage
      src="../../images/research/fig_open_volt3.png"
      alt="Voltage-activated K+ channel"
      loading="eager"
      className={pageStyles.mediaImage}
      imgClassName={pageStyles.mediaImageImg}
    />
  ),
  description: (
    <>
      <p>
        Voltage-gated K+ channels are transmembrane proteins that control and regulate the flow
        of K+ ions across cell membranes in response to changes in membrane potential and are
        essential for the propagation of action potentials in the nervous system. Detailed 3d
        structures are required in order to address the function of those channels. Available
        experimental results provide specific constraints on the structure of the channel, even
        though the direct translation of all the available information into 3d structures is not
        trivial. Computational methods are being used to refine structural models of the
        voltage-activated K+ channels.
      </p>
      <p>
        <b>Why are the models evolving with time?</b> The simple answer is that it has been
        possible to better define the structures as more data has become available. A brief
        history of the models: our very first efforts mostly showed that there was insufficient
        experimental restraints to construct models with reasonable confidence (Roux, 2002).
        The subsequent models (Silverman et al, 2003; Laine et al, 2003) were better constrained,
        but still uncertain due to lack of data. In our last efforts, we constructed molecular
        models of the Shaker K+ channel in the open and the closed state using the x-ray structure
        of the bacterial channel KvAP, together with all available experimental data (Chanda et al,
        2005). Three months after submission of the manuscript (April 2005), the structure of the
        Kv1.2 channel determined by x-ray crystallography was published (Long et al, 2005). Though
        there are clearly some structural differences, the main structural features of the latest
        model (Chanda et al, 2005) are in excellent agreement with the x-ray structure of the
        Kv1.2 channel.
      </p>
      <p>
        <a href={withPrefix("/resources/downloads/models/agtx_shaker_open.pdb")} download>
          Download the Shaker-Agitoxin model based on Laine et al (2003) and Eriksson and Roux (2002) (pdb format)
        </a>
      </p>
      <p>
        <a href={withPrefix("/resources/downloads/models/shaker_open_chanda_et_al_2005.pdb")} download>
          Download the Shaker open state model of Chanda et al (2005) (pdb format)
        </a>
      </p>
      <p>
        <a href={withPrefix("/resources/downloads/models/shaker_closed_chanda_et_al_2005.pdb")} download>
          Download the Shaker closed state model of Chanda et al (2005) (pdb format)
        </a>
      </p>
      <p><b>References</b></p>
      <p>
        B. Roux, "What can be deduced about the structure of Shaker from available data?" in
        "Ion channels: From atomic resolution physiology to functional genomics", Novartis
        Foundation Symposium 245, pp. 84-101, G. Bock Editor, John Wiley &amp; Sons Ltd.,
        Chichester (2002). [<a href={withPrefix("/resources/publications/shaker_novartis.pdf")}>
          pdf
        </a>]
      </p>
      <p>
        W.R. Silverman, B. Roux and D.M. Papazian, "Structural basis of two-stage voltage-dependent
        activation in K+ channels", <i>Proc. Nat. Acad. Sci.</i> <b>100</b>, 2935-2940 (2003).{" "}
        [<a href={withPrefix("/resources/publications/Silverman_et_al_PNAS_2003.pdf")}>
          pdf
        </a>]
      </p>
      <p>
        M. Laine, M.C.A. Lin, J.A. Bannister, W.R. Silverman, B. Roux and D.M. Papazian, "Atomic
        proximity between S4 segment and pore domain in Shaker potassium channels",{" "}
        <i>Neuron</i> <b>39</b>, 467-481 (2003).{" "}
        [<a href={withPrefix("/resources/publications/Laine_et_al_neuron_2003.pdf")}>
          pdf
        </a>]
      </p>
      <p>
        M. Laine, D.M. Papazian and B. Roux, "Critical assessment of a proposed model of Shaker",{" "}
        <i>FEBS Lett.</i> <b>564</b>, 257-63 (2004).{" "}
        [<a href={withPrefix("/resources/publications/febs_2004.pdf")}>
          pdf
        </a>]
      </p>
      <p>
        M.A.L. Eriksson and B. Roux, "Modeling the structure of Agitoxin in complex with the
        Shaker K+ channel",{" "}
        <a href="http://www.biophysj.org/cgi/content/full/83/5/2595"><i>Biophys. J.</i></a>{" "}
        <b>83</b>, 2595-2609 (2002).{" "}
        [<a href={withPrefix("/resources/publications/AgTx_Shaker_BJ_2002.pdf")}>
          pdf
        </a>]
      </p>
      <p>
        B. Chanda, O.K. Asamoah, R. Blunck, B. Roux, F. Bezanilla, "Gating charge displacement in
        voltage-gated ion channels involves limited transmembrane movement",{" "}
        <a href="http://www.nature.com/nature/journal/v436/n7052/full/nature03888.html">
          <i>Nature</i>
        </a>{" "}
        <b>436</b>, 852-856 (2005).{" "}
        [<a href={withPrefix("/resources/publications/chanda_2005.pdf")}>
          pdf
        </a>]
      </p>
    </>
  ),
};

export default Kv;