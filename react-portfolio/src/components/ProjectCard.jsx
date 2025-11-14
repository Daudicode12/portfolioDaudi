import React from 'react'

export default function ProjectCard({ title, description, repo, image }){
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <a className="btn-outline" href={repo} target="_blank" rel="noopener noreferrer">View Repo</a>
      </div>
    </article>
  )
}
