// src/models/Group.ts
export interface Group {
  id: string
  name: string
  persons: Person[]
}

export interface Expense {
  id: string
  name: string
  amount: number
  paidBy: string // personId of the payer
  beneficiaries: string[] // Array of personIds who benefit from this expense
}

export interface Person {
  id: string
  name: string
  expenses: Expense[]
  balance: number
}
