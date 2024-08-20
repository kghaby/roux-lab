import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as pageStyles from "./sectioned.module.css";

const Page = () => (
  <Layout>
    <div className={pageStyles.sectionedPage}>
      
    </div>
  </Layout>
)

export const Head = () => <Seo title="Page" />

export default Page
