import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>Welcome to the <b>Roux Lab!</b></h1>
      <p className={styles.intro}>
        Welcome to the laboratory of Benoît Roux, in the 
        <a href="https://biochem.uchicago.edu" className={styles.link}> Department of Biochemistry and Molecular Biology</a> at <a href="http://www.uchicago.edu" className={styles.link}>The University of Chicago</a>.
      </p>
      <p className={styles.intro}>
        Here, you will find information on our research, our publications, current and past group members, and various computational tools for theoretical biophysics.
      </p>
      <img src="/images/group/group_2016.jpg" alt="Group Photo" className={styles.groupPhoto} />
    </div>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;

