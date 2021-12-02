import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query CatLogo {
      file(relativePath: { eq: "catLogo.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img
            src={data.file.publicURL}
            alt="Cat face silhouette"
            loading="lazy"
          ></img>
        </Link>
        <h1>Cool Cats</h1>
      </div>
      <div className="links">
        <Link to="/" activeStyle={{ color: "#e38b80" }}>
          Home
        </Link>
        <Link to="/cats" activeStyle={{ color: "#e38b80" }}>
          Cats
        </Link>
        <Link to="/about" activeStyle={{ color: "#e38b80" }}>
          About
        </Link>
      </div>
    </nav>
  )
}
