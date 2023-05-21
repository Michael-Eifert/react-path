import { Group, Person } from '../model/Group'

export function addPersonToGroup(group: Group, newPerson: Person): Group {
  const updatedPersons = [...group.persons, newPerson]
  return {
    ...group,
    persons: updatedPersons,
  }
}
