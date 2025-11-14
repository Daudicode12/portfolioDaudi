import React, { useEffect, useState } from 'react'
import projectsData from '../data/projects'
import ProjectModal from '../components/ProjectModal'

export default function Projects(): JSX.Element{
  const [projects, setProjects] = useState<any[]>(projectsData)
  const [modalProject, setModalProject] = useState<any|null>(null)

  useEffect(() => {
    const token = import.meta.env.VITE_GITHUB_TOKEN

    async function fetchMeta() {
      const headers = token ? { Authorization: `token ${token}` } : {}

      const updated = await Promise.all(projectsData.map(async p => {
        try {
          const repoRes = await fetch(`https://api.github.com/repos/${p.repoSlug}`, { headers })
          if (!repoRes.ok) return p
          const repoJson = await repoRes.json()

          let readmeSummary = null
          try {
            const readmeRes = await fetch(`https://api.github.com/repos/${p.repoSlug}/readme`, { headers: { ...headers, Accept: 'application/vnd.github.v3.raw' } })
            if (readmeRes.ok) {
              const raw = await readmeRes.text()
              const paragraphs = raw.split(/\n\n+/).map((s: string) => s.trim()).filter(Boolean)
              if (paragraphs.length) {
                const first = paragraphs[0].replace(/[#>*`]/g, '').replace(/\n/g, ' ').trim()
                readmeSummary = first.length > 300 ? first.slice(0, 297) + '...' : first
              }
            }
          } catch (err) { }

          return {
            ...p,
            stars: repoJson.stargazers_count ?? null,
            repoDesc: repoJson.description ?? p.desc,
            liveDemo: repoJson.homepage || p.liveDemo || null,
            readmeSummary
          }
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
          <article key={p.id} className="project-card" onClick={() => setModalProject(p)}>
            <div className="card-media">
              <img src={p.img} alt={`${p.title} screenshot`} />
              <div className="overlay">
                {p.readmeSummary ? <div className="badge">{p.readmeSummary}</div> : null}
              </div>
            </div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.repoDesc ?? p.desc}</p>
              <div className="project-actions">
                <a className="btn" href={p.repoUrl} target="_blank" rel="noopener noreferrer">View Repo</a>
                {p.liveDemo && <a className="btn secondary" href={p.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                {p.stars != null && <span style={{color:'#666'}}>&#9733; {p.stars}</span>}
              </div>
            </div>
          </article>
        ))}
      </div>
      {modalProject && <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />}
    </div>
  )
}
