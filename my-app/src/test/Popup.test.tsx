import { render, screen } from '@testing-library/react'
import Popup from '../components/Popup'

describe('Popup', () => {
  it('renders the component', () => {
    const MockChild = () => <div data-testid="mock-child">Mock Child</div>
    render(
      <Popup open={true} handleClose={jest.fn}>
        <MockChild />
      </Popup>,
    )
    const element = screen.getByTestId('modal')
    expect(element).toBeInTheDocument()

    const childElement = screen.getByTestId('mock-child')
    expect(childElement).toBeInTheDocument()
  })
})
