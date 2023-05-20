import { Expense, Group, Person, Debt } from '../model/Group'

export const addExpenseToGroup = (group: Group, expense: Expense): Group => {
  const updatedExpenses = [...group.expenses, expense]

  const updatedPersons = group.persons.map((person: Person) => {
    if (
      expense.beneficiaries.length === 1 &&
      personIsPayer(expense, person) &&
      personHasExpense(expense, person)
    ) {
      return person
    } else if (personIsPayer(expense, person)) {
      if (personHasExpense(expense, person)) {
        const share =
          person.balance + expense.amount / expense.beneficiaries.length
        return { ...person, balance: share }
      } else {
        const updatedBalance = person.balance + expense.amount
        return { ...person, balance: updatedBalance }
      }
    } else if (personHasExpense(expense, person)) {
      const share = expense.amount / expense.beneficiaries.length
      const updatedBalance = person.balance - share

      const existingDebtIndex = person.debts.findIndex(
        (debt) => debt.owedTo === expense.paidBy,
      )

      let updatedDebts: Debt[] = []

      if (existingDebtIndex !== -1) {
        updatedDebts = person.debts.map((debt, index) => {
          if (index === existingDebtIndex) {
            return { ...debt, amount: debt.amount + share }
          }
          return debt
        })
      } else {
        const newDebt: Debt = {
          owedTo: expense.paidBy,
          amount: share,
        }
        updatedDebts = [...person.debts, newDebt]
      }

      return { ...person, balance: updatedBalance, debts: updatedDebts }
    }
    return person
  })

  return { ...group, persons: updatedPersons, expenses: updatedExpenses }
}

export const roundUp = (balance: number) => balance.toFixed(2)

const personHasExpense = (expense: Expense, person: Person): boolean =>
  expense.beneficiaries.includes(person.id)

const personIsPayer = (expense: Expense, person: Person): boolean =>
  person.id === expense.paidBy
