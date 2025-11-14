import React, { useEffect, useState } from 'react'
import projectsData from '../data/projects'

export default function Projects(){
  const [projects, setProjects] = useState(projectsData)

  useEffect(() => {
    // Fetch lightweight metadata (stars, description) for each repo from GitHub API.
    // This is optional and will silently fail on rate-limit or network errors.
    async function fetchMeta() {
      const updated = await Promise.all(projectsData.map(async p => {
        try {
          const res = await fetch(`https://api.github.com/repos/${p.repoSlug}`)
          if (!res.ok) return p
          const json = await res.json()
          return { ...p, stars: json.stargazers_count ?? null, repoDesc: json.description ?? p.desc }
        } catch (err) {
          return p
        }
      }))
      setProjects(updated)
    }

    fetchMeta()
  }, [])

  return (
    <div className="container">
      <h2>Projects</h2>
      <p>Below are a few of my projects — images are temporary placeholders from Unsplash and can be updated later.</p>

      <div className="projects-grid">
        {projects.map(p => (
          <article key={p.id} className="project-card">
            <a href={p.repoUrl} target="_blank" rel="noopener noreferrer">
              <img src={p.img} alt={`${p.title} screenshot`} />
            </a>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.repoDesc ?? p.desc}</p>
              <div style={{display:'flex',gap:12,alignItems:'center',marginTop:12}}>
                <a className="btn" href={p.repoUrl} target="_blank" rel="noopener noreferrer">View Repo</a>
                {p.stars != null && <span style={{color:'#666'}}>&#9733; {p.stars}</span>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
