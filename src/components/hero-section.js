import React from "react"
import { Link } from "gatsby"
import "../style.css"
import Hero from "../assets/hero.jpg"

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="text-box">
        <span className="small-heading">BLOGS ABOUT EVERYTHING RELATED TO</span>
        <h1 className="main-heading">INTERNATIONAL RELATIONS</h1>
        <span className="featured-text">Featured Blog of the day</span>
        <h3>Conflict: Overview, definition, studies.</h3>
        <p className="paragraph">
          The topic of conflicts is a very broad and diverse theme. It will be a
          main matter in this blog, in which diverse theories, ideas, as well as
          specific conflicts that have happened in the past and are currently
          influential will be investigated and interpreted. This article
          encompasses a very basic definition, key for the next articles, and a
          brief introduction to main areas of studies.
        </p>

        <Link to="/ConflictOverviewDefination" className="read-more">
          Read More
        </Link>
      </div>
      <div className="image-box">
        <img
          src={Hero}
          alt="The hero section of the website"
          className="heroimg"
        />
      </div>
    </div>
  )
}
export default HeroSection
