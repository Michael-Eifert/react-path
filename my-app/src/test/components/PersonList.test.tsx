import { render } from '@testing-library/react'
import GroupContextProvider from '../../context/GroupContext'
import PersonList from '../../components/PersonList'
import { groupsMock } from '../__mocks__/groupMock'

describe('PersonList', () => {
  it('renders the persons in the list', () => {
    const { getByText } = render(
      <GroupContextProvider>
        <PersonList group={groupsMock[0]} />
      </GroupContextProvider>,
    )

    groupsMock[0].persons.forEach((person) => {
      expect(getByText(person.name)).toBeInTheDocument()
    })
  })
})
