/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Header = () => {
 
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <h1>
      <strong>ABC</strong>of<strong>IR</strong> 
      </h1>

      <nav>
        <Link to='/'></Link>
      </nav>
    </div>
  )
}

export default Bio
