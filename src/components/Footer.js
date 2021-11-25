import React from "react"
import { FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <div className="footer">
      <p>Developed by gabxyz </p>
      <a
        href="https://github.com/gabxyz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  )
}
