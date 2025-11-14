import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../components/Navbar'

describe('Navbar', () => {
  it('renders brand logo and links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )

    const logo = screen.getByAltText(/logo/i)
    expect(logo).toBeInTheDocument()

    expect(screen.getByText(/about/i)).toBeInTheDocument()
    expect(screen.getByText(/home/i)).toBeInTheDocument()
    expect(screen.getByText(/projects/i)).toBeInTheDocument()
    expect(screen.getByText(/contact/i)).toBeInTheDocument()
  })
})
