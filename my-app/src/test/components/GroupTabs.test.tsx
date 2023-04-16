import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Group } from '../../model/Group'
import GroupTabs from '../../components/GroupTabs'

const mockGroup: Group = {
  id: 'testGroup',
  name: 'Test Group',
}

describe('GroupTabs', () => {
  test('renders all tabs and switches between them', () => {
    render(
      <GroupTabs
        group={mockGroup}
        tabValue={0}
        handleChange={(event, newValue) => {}}
      />,
    )

    const personsTab = screen.getByText('Persons')
    const expensesTab = screen.getByText('Expenses')
    const settleUpTab = screen.getByText('Settle Up')

    expect(personsTab).toBeInTheDocument()
    expect(expensesTab).toBeInTheDocument()
    expect(settleUpTab).toBeInTheDocument()

    fireEvent.click(personsTab)
    fireEvent.click(expensesTab)
    fireEvent.click(settleUpTab)
  })
})
