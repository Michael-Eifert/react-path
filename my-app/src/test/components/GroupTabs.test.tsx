import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import GroupTabs from '../../components/GroupTabs'
import { groupsMock } from '../__mocks__/groupMock'
import GroupContextProvider from '../../context/GroupContext'

describe('GroupTabs', () => {
  it('renders all tabs and switches between them', () => {
    render(
      <GroupContextProvider>
        <GroupTabs
          group={groupsMock[0]}
          tabValue={0}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          handleChange={(_event, _newValue) => {
            return null
          }}
        />
      </GroupContextProvider>,
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
