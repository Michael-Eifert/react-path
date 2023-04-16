import { Group, Person } from '../model/Group'
import { generateId } from './idGenerator'

export function addPersonToGroup(group: Group, personName: string): Group {
  const newPerson: Person = {
    id: generateId(),
    name: personName,
    expenses: [],
    balance: 0,
  }

  const updatedPersons = [...group.persons, newPerson]

  return {
    ...group,
    persons: updatedPersons,
  }
}
