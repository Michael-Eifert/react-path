import { Group } from '../../model/Group'

export const groupsMock: Group[] = [
  {
    id: 'GroupId1',
    name: 'Diamond',
    persons: [
      { id: '1', name: 'Myriam', expenses: [], balance: 0 },
      { id: '2', name: 'Paul', expenses: [], balance: 0 },
      { id: '3', name: 'Michael', expenses: [], balance: 0 },
    ],
  },
  {
    id: 'GroupId2',
    name: 'Crystal',
    persons: [
      { id: '4', name: 'Andrea', expenses: [], balance: 0 },
      { id: '5', name: 'Marcel', expenses: [], balance: 0 },
      { id: '6', name: 'Anna', expenses: [], balance: 0 },
    ],
  },
]
