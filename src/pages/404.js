import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as style from "../styles/notFound.module.css"

export default function NotFound() {
  return (
    <Layout>
      <div className={style.notFound}>
        <h1>Page Not Found</h1>
        <p>
          Hello there, this page does not exist. You can go back to the{" "}
          <Link to="/">Home</Link> page and navigate to the page you are looking
          for.
        </p>
      </div>
    </Layout>
  )
}
