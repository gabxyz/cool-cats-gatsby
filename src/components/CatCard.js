import React from "react"

export default function CatCard({ cats }) {
  const { ...cat } = cats.frontmatter
  return (
    <div className="catCard">
      <h1>{cat.title}</h1>
      <img src={cat.src} alt={cat.title} />
      <p>{cat.description}</p>
    </div>
  )
}
