import { render, fireEvent, screen } from '@testing-library/react'
import ConfirmButton from '../../components/ConfirmButton'

describe('ConfirmButton', () => {
  it('should render the Confirm button', () => {
    render(<ConfirmButton />)
    const button = screen.getByText(/Confirm/i)
    expect(button).toBeInTheDocument()
  })

  it('should call onSubmit when clicked', () => {
    const onSubmitMock = jest.fn()
    render(<ConfirmButton onSubmit={onSubmitMock} />)
    const button = screen.getByText(/Confirm/i)

    fireEvent.click(button)
    expect(onSubmitMock).toHaveBeenCalledTimes(1)
  })

  it('should not call onSubmit when disabled', () => {
    const onSubmitMock = jest.fn()
    render(<ConfirmButton onSubmit={onSubmitMock} disabled />)
    const button = screen.getByText(/Confirm/i)

    fireEvent.click(button)
    expect(onSubmitMock).toHaveBeenCalledTimes(0)
  })
})
