import { render, screen } from '@testing-library/react'
import About from '../pages/About'

describe('About', () => {
  it('renders the component', () => {
    render(<About></About>)
    const element = screen.getByText(/About/i)
    expect(element).toBeInTheDocument()
  })
})
