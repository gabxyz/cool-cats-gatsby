import React from "react"
import Layout from "../components/Layout"
import * as style from "../styles/home.module.css"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <div className={style.home}>
        <h1>COOL CATS</h1>
        <p>
          This is the cool cats homepage. Go to the <Link to="/cats">Cats</Link>{" "}
          page to see pics of some cool cats. The cats are cute too, I mean,
          they're cats, so it's kind of obvious that they would be cute and
          cool. Enjoy!
        </p>
      </div>
    </Layout>
  )
}
