import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div style={{
      textAlign: "center",
      padding: "2rem",
    }}>
    <h1>404: Not Found</h1>
    <p>Path unable to converge.</p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
