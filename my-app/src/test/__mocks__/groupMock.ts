import { Group } from '../../model/Group'

export const groupsMock: Group[] = [
  {
    id: 'GroupId1',
    name: 'Diamond',
    persons: [
      { id: '1', name: 'Myriam',  balance: 0 },
      { id: '2', name: 'Paul',  balance: 0 },
      { id: '3', name: 'Michael',  balance: 0 },
    ],
    expenses: []
  },
  {
    id: 'GroupId2',
    name: 'Crystal',
    persons: [
      { id: '4', name: 'Andrea', balance: 0 },
      { id: '5', name: 'Marcel', balance: 0 },
      { id: '6', name: 'Anna', balance: 0 },
    ],
    expenses: []
  },
  {
    id: 'GroupId3',
    name: 'Expenses Example Group',
    persons: [
      {
        id: 'person1',
        name: 'Alice',
        balance: 0,
      },
      {
        id: 'person2',
        name: 'Bob',
        balance: 0,
      },
    ],
    expenses: [
      {
        id: 'expense1',
        name: 'Dinner',
        amount: 50,
        paidBy: 'person1',
        beneficiaries: ['person1', 'person2'],
      },
      {
        id: 'expense2',
        name: 'Movie Tickets',
        amount: 30,
        paidBy: 'person1',
        beneficiaries: ['person1', 'person2'],
      },
      {
        id: 'expense3',
        name: 'Groceries',
        amount: 100,
        paidBy: 'person2',
        beneficiaries: ['person1', 'person2'],
      },
    ],
  }
]
