import React from "react"
import Layout from "../components/Layout"
import * as style from "../styles/about.module.css"
import { FiMail } from "react-icons/fi"
import { FaGithub } from "react-icons/fa"

export default function About() {
  return (
    <Layout>
      <div className={style.about}>
        <h1>About this website</h1>
        <p>
          This is a simple website that I built to learn how to use Gatsby.
          Learned lots of cool stuff building this, as simple as it may be. You
          can contact me if you want by emailing me{" "}
          <a href="mailto:gabxyzdev@gmail.com">
            Here <FiMail size={18} />
          </a>
          . You can also find me on{" "}
          <a
            href="https://github.com/gabxyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github <FaGithub size={18} />
          </a>
          .
        </p>
      </div>
    </Layout>
  )
}
