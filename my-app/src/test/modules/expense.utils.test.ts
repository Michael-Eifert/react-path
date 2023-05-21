import { addExpenseToGroup, roundUp } from '../../modules/expense.utils'
import { groupsMock } from '../__mocks__/groupMock'
import { Expense } from '../../model/Group'

describe('expense utils', () => {
  describe('addExpenseToGroup', () => {
    it('adds an expense to the group, payer is part of the beneficiaries', () => {
      const group = groupsMock[2] // Expense Example Group
      const newExpense: Expense = {
        id: 'newExpense',
        name: 'Lunch',
        amount: 40,
        paidBy: 'person1',
        beneficiaries: ['person1', 'person2'],
      }

      const result = addExpenseToGroup(group, newExpense)

      // Check if the new expense is added
      expect(result.expenses).toContain(newExpense)

      // Check if the balances are updated correctly
      expect(
        result.persons.find((person) => person.id === 'person1')?.balance,
      ).toBe(20)
      expect(
        result.persons.find((person) => person.id === 'person2')?.balance,
      ).toBe(-20)
    })

    it('adds an expense to the group, payer is part of several beneficiaries', () => {
      const group = groupsMock[2] // Expense Example Group
      const newExpense: Expense = {
        id: 'newExpense',
        name: 'Lunch',
        amount: 30,
        paidBy: 'person1',
        beneficiaries: ['person1', 'person2', 'person3'],
      }

      const result = addExpenseToGroup(group, newExpense)

      // Check if the new expense is added
      expect(result.expenses).toContain(newExpense)

      // Check if the balances are updated correctly
      expect(
        result.persons.find((person) => person.id === 'person1')?.balance,
      ).toBe(20)
      expect(
        result.persons.find((person) => person.id === 'person2')?.balance,
      ).toBe(-10)
      expect(
        result.persons.find((person) => person.id === 'person3')?.balance,
      ).toBe(-10)
    })

    it('adds an expense paid by the same person', () => {
      const group = groupsMock[2]
      const newExpense: Expense = {
        id: 'newExpense',
        name: 'Lunch',
        amount: 40,
        paidBy: 'person1',
        beneficiaries: ['person1'],
      }

      const result = addExpenseToGroup(group, newExpense)

      // Check if the new expense is added
      expect(result.expenses).toContain(newExpense)

      // Check if the balances are updated correctly
      // Person1's balance should stay the same as they paid for their own expense
      expect(
        result.persons.find((person) => person.id === 'person1')?.balance,
      ).toBe(0)
      // Person2's balance should not be affected as they were not a beneficiary
      expect(
        result.persons.find((person) => person.id === 'person2')?.balance,
      ).toBe(0)
    })

    it('adds an expense where the payer is not a beneficiary', () => {
      const group = groupsMock[2]
      const newExpense: Expense = {
        id: 'newExpense',
        name: 'Gift',
        amount: 40,
        paidBy: 'person1',
        beneficiaries: ['person2'],
      }

      const result = addExpenseToGroup(group, newExpense)

      // Check if the new expense is added
      expect(result.expenses).toContain(newExpense)

      // Check if the balances are updated correctly
      // Person1's balance should increase by the paid amount
      expect(
        result.persons.find((person) => person.id === 'person1')?.balance,
      ).toBe(40)
      // Person2's balance should decrease by the amount of the expense
      expect(
        result.persons.find((person) => person.id === 'person2')?.balance,
      ).toBe(-40)
    })
  })

  describe('roundUp', () => {
    it('correctly rounds up a number with more than two decimal places', () => {
      const result = roundUp(16.666666)
      expect(result).toBe('16.67')
    })

    it('correctly rounds up a number with exactly two decimal places', () => {
      const result = roundUp(16.66)
      expect(result).toBe('16.66')
    })

    it('correctly rounds up a number with less than two decimal places', () => {
      const result = roundUp(16.6)
      expect(result).toBe('16.60')
    })

    it('correctly rounds up a number with no decimal places', () => {
      const result = roundUp(16)
      expect(result).toBe('16.00')
    })
  })
})
