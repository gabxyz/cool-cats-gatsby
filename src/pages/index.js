import React from "react"
import Layout from "../components/Layout"
import * as style from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={style.home}>
        <h1>Home Page</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quam
          porro omnis vel, iure error sapiente rem deserunt incidunt optio
          debitis consequatur adipisci nemo, magni beatae. Aliquid a laborum
          beatae!
        </p>
      </div>
    </Layout>
  )
}
