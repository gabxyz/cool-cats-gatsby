import React from "react"
import Layout from "../components/Layout"
import * as style from "../styles/about.module.css"

export default function About() {
  return (
    <Layout>
      <div className={style.about}>
        <h1>About this website</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos totam
          cupiditate nemo, quae animi, distinctio dolor ullam magni fuga alias
          veniam deserunt reprehenderit maxime nobis error aspernatur!
          Provident, eum assumenda.
        </p>
      </div>
    </Layout>
  )
}
