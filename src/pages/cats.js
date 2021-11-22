import { graphql } from "gatsby"
import React from "react"
import CatCard from "../components/CatCard"
import Layout from "../components/Layout"
import * as style from "../styles/cats.module.css"

export default function Cats({ data }) {
  console.log(data)
  const cats = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div className={style.cats}>
        <h1>COOL CATS</h1>
        <div className="cats-container">
          {cats.map(cat => (
            <CatCard cats={cat} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

// export page query
export const Query = graphql`
  query CatsPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          description
          src
        }
        id
      }
    }
  }
`
