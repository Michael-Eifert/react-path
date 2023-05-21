// src/models/Group.ts
export interface Group {
  id: string
  name: string
  currency: string
  persons: Person[]
  expenses: Expense[]
  payments: GroupPayment[]
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
  balance: number
  debts: Debt[]
  payments: Payment[]
}

export interface Debt {
  owedTo: string // personId of the person who is owed money
  amount: number
}

export interface Payment {
  paidTo: string // personId of the person who got paid
  amount: number
}

export interface GroupPayment {
  payerName: string
  recipientName: string
  amount: number
}
