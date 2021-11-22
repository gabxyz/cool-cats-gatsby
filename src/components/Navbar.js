import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img
          src="/catLogo.svg"
          alt="Cat face silhouette"
          style={{ maxWidth: "8%" }}
        ></img>
        <h1>Cool Cats</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/cats">Cats</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}
