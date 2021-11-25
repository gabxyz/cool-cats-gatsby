import { graphql } from "gatsby"
import React from "react"
import CatCard from "../components/CatCard"
import Layout from "../components/Layout"
import * as style from "../styles/cats.module.css"

export default function Cats({ data }) {
  const cats = data.cats.nodes
  return (
    <Layout>
      <div className={style.cats}>
        <h1>COOL CATS</h1>
        <div className="cats-container">
          {cats.map(cat => (
            <CatCard cats={cat} key={cat.id} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

// export page query
export const Test = graphql`
  query CatsPage {
    cats: allMarkdownRemark {
      nodes {
        frontmatter {
          title
          description
          src {
            childImageSharp {
              gatsbyImageData(
                width: 300
                blurredOptions: { width: 100 }
                placeholder: BLURRED
                transformOptions: { cropFocus: CENTER }
                aspectRatio: 0.7
              )
            }
          }
        }
        id
      }
    }
  }
`
