import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as pageStyles from "./sectioned.module.css";

const ContactsPage = () => {
  return (
    <Layout>
      <div className={pageStyles.sectionedPage} style={{ fontSize: "1.2rem" }}>
        <h1><b>Contacts</b></h1>
        <h3><b>Benoît Roux</b></h3>
          <p>929 East 57th Street <br />
          Chicago, IL 60637 <br />
          Rm: W323B <br />
          Phone: 773-834-3557 <br />
          Fax: 773-702-0439    <br />
          Email: <a href="mailto:roux@uchicago.edu"> roux@uchicago.edu</a>
          <br /></p>

          <h3><b>Laboratories</b></h3>
          <p>
          929 East 57th Street <br />
          Chicago, IL 60637 <br />
          Rm: W312 Phone: 773-834-4458<br /> 
          Rm: W323A Phone: 773-834-2812
          <br /></p>

          <h3><b>Address for FedEx Shipments</b></h3>
          <p>University of Chicago <br />
          Dept. of Biochemistry & Molecular Biology  <br />
          929 E. 57th St. GCIS W229R <br />
          Chicago IL USA 60637 <br />
          Attn: Lydia Blachowicz/Roux Lab <br />
          Phone: 773-834-4805
          <br /></p>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Contacts" />

export default ContactsPage;

