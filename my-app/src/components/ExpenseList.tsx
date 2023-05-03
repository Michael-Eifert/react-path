import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { Expense, Group } from '../model/Group'

interface ExpenseListProps {
  group: Group
}

const ExpenseList: React.FC<ExpenseListProps> = ({ group }) => {
  const { expenses } = group

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Paid By</TableCell>
          <TableCell>Beneficiaries</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {expenses.map((expense: Expense) => (
          <TableRow key={expense.id}>
            <TableCell>{expense.name}</TableCell>
            <TableCell>{expense.amount}</TableCell>
            <TableCell>
              {group.persons.find((person) => person.id === expense.paidBy)
                ?.name || 'Unknown'}
            </TableCell>
            <TableCell>
              {expense.beneficiaries
                .map(
                  (personId) =>
                    group.persons.find((person) => person.id === personId)
                      ?.name || 'Unknown',
                )
                .join(', ')}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default ExpenseList
