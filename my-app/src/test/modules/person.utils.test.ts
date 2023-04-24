import { Person } from '../../model/Group'
import { addPersonToGroup } from '../../modules/person.utils'
import { groupsMock } from '../__mocks__/groupMock'

describe('addPersonToGroup', () => {
  const group = groupsMock[0]
  it('adds a person to the group', () => {
    const newPerson: Person = {
      id: 'testPerson1',
      name: 'Test Person',
      balance: 0,
    }
    const updatedGroup = addPersonToGroup(group, newPerson)
    expect(updatedGroup.persons).toContain(newPerson)
    expect(updatedGroup.persons.length).toEqual(group.persons.length + 1)
  })
})
