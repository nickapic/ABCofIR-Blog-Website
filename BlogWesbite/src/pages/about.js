import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
  render() {
    

    return (
      <Layout location={this.props.location} title='ABCofIR'>
        <SEO title="About Page for the website ABCofIR" />
        <h1 className='main-heading'>About Us</h1>
        <p className='paragraph'> A blog website for the subject of Interantional Relations started by a group of Students who study and are really intrested in the subject  </p>
      </Layout>
    )
  }
}

export default About