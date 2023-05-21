import { Group } from '../../model/Group'

export const groupsMock: Group[] = [
  {
    id: 'GroupId1',
    name: 'Diamond',
    currency: '$',
    persons: [
      { id: '1', name: 'Myriam', balance: 0, debts: [], payments: [] },
      { id: '2', name: 'Paul', balance: 0, debts: [], payments: [] },
      { id: '3', name: 'Michael', balance: 0, debts: [], payments: [] },
    ],
    expenses: [],
    payments: [],
  },
  {
    id: 'GroupId2',
    name: 'Crystal',
    currency: '€',
    persons: [
      { id: '4', name: 'Andrea', balance: 0, debts: [], payments: [] },
      { id: '5', name: 'Marcel', balance: 0, debts: [], payments: [] },
      { id: '6', name: 'Anna', balance: 0, debts: [], payments: [] },
    ],
    expenses: [],
    payments: [],
  },
  {
    id: 'GroupId3',
    name: 'Expenses Example Group',
    currency: '£',
    persons: [
      {
        id: 'person1',
        name: 'Alice',
        balance: 0,
        debts: [],
        payments: [],
      },
      {
        id: 'person2',
        name: 'Bob',
        balance: 0,
        debts: [],
        payments: [],
      },
      {
        id: 'person3',
        name: 'James',
        balance: 0,
        debts: [],
        payments: [],
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
    payments: [],
  },
]
