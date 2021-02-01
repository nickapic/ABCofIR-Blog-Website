import React from "react"
import { Link } from "gatsby"
import "../style.css"
import Hero from "../assets/hero.jpg"

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="text-box">
        <span className="small-heading">BLOGS ABOUT EVERYTHING RELATED TO</span>
        <h1 className="main-heading">Cyber Security</h1>
        <span className="featured-text">Featured Blog of the day</span>
        <h3>Test Blog</h3>
        <p className="paragraph">
          TYo Yo
        </p>

        <Link to="/TestBlog" className="read-more">
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
