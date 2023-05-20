import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GroupInput from '../../../components/inputForms/GroupInput'

describe('GroupInput', () => {
  it('allows the user to fill out the form and submit it', async () => {
    const mockOnConfirm = jest.fn()
    const mockHandleClose = jest.fn()

    render(
      <GroupInput onConfirm={mockOnConfirm} handleClose={mockHandleClose} />,
    )

    // Get form fields
    const groupNameInput = screen.getByLabelText('group name')
    const groupCurrencyInput = screen.getByLabelText('Group Currency')
    const submitButton = screen.getByRole('button', { name: /confirm/i })

    // Simulate user events
    fireEvent.change(groupNameInput, { target: { value: 'New Group' } })

    // Open the select menu
    userEvent.click(groupCurrencyInput)

    // Select the option for USD
    const option = await screen.findByRole('option', { name: /US Dollar/i })
    userEvent.click(option)

    fireEvent.click(submitButton)

    // Assertions
    expect(mockOnConfirm).toHaveBeenCalledTimes(1)
    expect(mockHandleClose).toHaveBeenCalledTimes(1)
    expect(groupNameInput).toHaveValue('New Group')
    expect(groupCurrencyInput).toContain('$')
  })
})
