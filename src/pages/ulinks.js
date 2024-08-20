import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as pageStyles from "./sectioned.module.css";

const ULinksPage = () => {
  return (
    <Layout>
      <div className={pageStyles.sectionedPage}>
        <h1><b>Useful Links</b></h1>
        <ul style={{ fontSize: "1.5rem" }}>
          <li><a href="http://yuri.harvard.edu"> Harvard CHARMM home page </a></li>
          <li><a href="http://www.lobos.nih.gov/cbs/index.shtml "> Home page of B.R. Brooks at NIH </a></li>
          <li><a href="http://brooks.chem.lsa.umich.edu"> Home page of C.L. Brooks III at Scripps </a></li>
          <li><a href="http://mackerell.umaryland.edu/MacKerell_Lab.html"> Home page of A.D. MacKerell (Grand Guru of Parameters!) </a></li>
          <li><a href="http://www.uchicago.edu"> The University of Chicago </a></li>
          <li><a href="https://accounts.lcrc.anl.gov"> Laboratory Computing Resource Center (LCRC) at Argonne National Laboratory </a></li>
          <li><a href="http://beagle.ci.uchicago.edu/using-beagle/"> The Beagle Cluster at the Computation Institute of the University of Chicago</a></li>
          <li><a href="https://allocations.access-ci.org/"> ACCESS Allocations</a></li>
        </ul>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Useful Links" />

export default ULinksPage;

