import { Group, Expense } from '../model/Group'

export function addExpenseToGroup(group: Group, newExpense: Expense): Group {
  const updatedExpenses = [...group.expenses, newExpense]
  console.log('Added expense: ', newExpense, ' To group: ', group)
  return {
    ...group,
    expenses: updatedExpenses,
  }
}
