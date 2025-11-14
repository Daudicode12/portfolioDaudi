import React, { useState } from 'react'

type Project = any

export default function ProjectModal({ project, onClose }: {project: Project|null, onClose: () => void}){
  const [index, setIndex] = useState(0)
  if (!project) return null

  const screenshots = project.screenshots && project.screenshots.length ? project.screenshots : [project.img]

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal-card">
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="modal-media">
          <img src={screenshots[index]} alt={`${project.title} screenshot ${index+1}`} />
        </div>
        <div className="modal-body">
          <h3>{project.title}</h3>
          {project.readmeSummary ? <p className="readme-summary">{project.readmeSummary}</p> : <p>{project.repoDesc ?? project.desc}</p>}

          <div style={{display:'flex',gap:12,marginTop:12}}>
            <a className="btn" href={project.repoUrl} target="_blank" rel="noopener noreferrer">View Repo</a>
            {project.liveDemo && <a className="btn secondary" href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
          </div>

          {screenshots.length > 1 && (
            <div style={{display:'flex',gap:8,marginTop:12,alignItems:'center'}}>
              <button className="btn secondary" onClick={() => setIndex(i => (i-1+screenshots.length)%screenshots.length)}>Prev</button>
              <button className="btn secondary" onClick={() => setIndex(i => (i+1)%screenshots.length)}>Next</button>
              <div style={{marginLeft:8,color:'#666'}}>{index+1}/{screenshots.length}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
