import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function CatCard({ cats }) {
  const { ...cat } = cats.frontmatter
  return (
    <div className="catCard">
      <h1>{cat.title}</h1>
      <GatsbyImage image={getImage(cat.src)} alt={cat.title} />
      <p>{cat.description}</p>
    </div>
  )
}
