import React from "react"
import { Link } from "gatsby"
import '../style.css'


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
       <div className='header'> 
         <h1
          style={{
            fontSize:`rem`,
            marginBottom: 0,
            display:`flex`,
            alignItems:`center`,
            marginTop: 0,
            fontFamily: `Poppins, sans-serif`
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
        <div className='nav-bar' style={{
          display: `flex`,
          alignItems: `center`,
          textDecoration:`none`,
          height: `100%`
        }}>
          <Link to='/about' className='nav-link'>About</Link>
          <Link to='/articles' className='nav-link'>Articles</Link>
        </div>
        </div>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              fontFamily: `Poppins, sans-serif`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `15rem`,
          marginRight: `3rem`,
          maxWidth:  `90%`,
          padding: `2rem 5rem `,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
