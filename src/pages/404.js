import React from "react"
import Layout from "../components/Layout"
import * as style from "../styles/notFound.module.css"

export default function NotFound() {
  return (
    <Layout>
      <div className={style.notFound}>
        <h1>Page Not Found</h1>
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
