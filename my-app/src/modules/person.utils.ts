import { Group, Person } from '../model/Group'

export function addPersonToGroup(group: Group, newPerson: Person): Group {
  const updatedPersons = [...group.persons, newPerson]
  console.log('Added person: ', newPerson, ' To group: ', group)
  return {
    ...group,
    persons: updatedPersons,
  }
}
