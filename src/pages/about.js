import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title="ABCofIR">
        <SEO title="About Page for the website ABCofIR" />
        <h1 className="main-heading">About Us</h1>
        <p className="about-paragraph">
          {" "}
        Yo
        </p>
      </Layout>
    )
  }
}

export default About
