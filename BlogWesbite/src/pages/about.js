import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
  render() {
    

    return (
      <Layout location={this.props.location} title='ABCofIR'>
        <SEO title="About Page for the website ABCofIR" />
        <h1>About Us</h1>
        <p>Boi o Boi</p>
      </Layout>
    )
  }
}

export default About