import { render, screen, fireEvent } from '@testing-library/react'
import PersonInput from '../../../components/inputForms/PersonInput'

describe('PersonInput', () => {
  it('allows the user to fill out the form and submit it', () => {
    const mockOnConfirm = jest.fn()
    const mockHandleClose = jest.fn()

    render(
      <PersonInput onConfirm={mockOnConfirm} handleClose={mockHandleClose} />,
    )

    // Get form field
    const personNameInput = screen.getByLabelText('person name')
    const submitButton = screen.getByRole('button', { name: /confirm/i })

    // Simulate user events
    fireEvent.change(personNameInput, { target: { value: 'New Person' } })
    fireEvent.click(submitButton)

    // Assertions
    expect(mockOnConfirm).toHaveBeenCalledTimes(1)
    expect(mockHandleClose).toHaveBeenCalledTimes(1)
    expect(personNameInput).toHaveValue('New Person')
  })
})
