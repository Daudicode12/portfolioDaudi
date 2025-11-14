import React from 'react'
import { render, screen } from '@testing-library/react'
import ProjectModal from '../components/ProjectModal'

describe('ProjectModal', () => {
  const project = {
    id: 1,
    title: 'Sample Project',
    repoUrl: 'https://github.com/example/repo',
    img: 'https://source.unsplash.com/collection/888146/800x600?sig=1',
    screenshots: ['https://source.unsplash.com/collection/888146/1200x800?sig=1'],
    readmeSummary: 'This is a sample README summary for the project.'
  }

  it('renders modal content', () => {
    render(<ProjectModal project={project} onClose={() => {}} />)
    expect(screen.getByText(/Sample Project/i)).toBeInTheDocument()
    expect(screen.getByText(/this is a sample readme summary/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View Repo/i })).toBeInTheDocument()
  })
})
