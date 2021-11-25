import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="/catLogo.svg" alt="Cat face silhouette"></img>
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
