import { render, screen } from '@testing-library/react'
import Popup from '../components/Popup'

describe('Popup', () => {
  it('renders the component', () => {
    render(<Popup open={true} handleClose={jest.fn}></Popup>)
    const element = screen.getByTestId('modal')
    expect(element).toBeInTheDocument()
  })
})
