import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import GroupInput from '../../../components/inputForms/GroupInput'

describe('GroupInput', () => {
  it('allows the user to fill out the form and submit it', () => {
    const mockOnConfirm = jest.fn()
    const mockHandleClose = jest.fn()

    render(
      <GroupInput onConfirm={mockOnConfirm} handleClose={mockHandleClose} />,
    )

    // Get form fields
    const groupNameInput = screen.getByLabelText('group name')
    const groupCurrencyInput = screen.getByLabelText('group currency')
    const submitButton = screen.getByRole('button', { name: /confirm/i })

    // Simulate user events
    fireEvent.change(groupNameInput, { target: { value: 'New Group' } })
    fireEvent.change(groupCurrencyInput, { target: { value: 'USD' } })
    fireEvent.click(submitButton)

    // Assertions
    expect(mockOnConfirm).toHaveBeenCalledTimes(1)
    expect(mockHandleClose).toHaveBeenCalledTimes(1)
    expect(groupNameInput).toHaveValue('New Group')
    expect(groupCurrencyInput).toHaveValue('USD')
  })
})
