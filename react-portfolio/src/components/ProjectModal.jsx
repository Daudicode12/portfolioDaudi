import React from 'react'

export default function ProjectModal({ project, onClose }){
  if (!project) return null

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal-card">
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="modal-media">
          {project.screenshots && project.screenshots.length ? (
            <img src={project.screenshots[0]} alt={`${project.title} screenshot`} />
          ) : (
            <img src={project.img} alt={`${project.title} screenshot`} />
          )}
        </div>
        <div className="modal-body">
          <h3>{project.title}</h3>
          {project.readmeSummary ? <p className="readme-summary">{project.readmeSummary}</p> : <p>{project.repoDesc ?? project.desc}</p>}

          <div style={{display:'flex',gap:12,marginTop:12}}>
            <a className="btn" href={project.repoUrl} target="_blank" rel="noopener noreferrer">View Repo</a>
            {project.liveDemo && <a className="btn secondary" href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
          </div>
        </div>
      </div>
    </div>
  )
}
