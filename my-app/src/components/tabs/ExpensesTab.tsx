import React from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Group } from '../../model/Group';

interface ExpensesTabProps {
  group: Group;
}

const ExpensesTab: React.FC<ExpensesTabProps> = ({ group }) => {
  const { expenses } = group;

  return (
    <Box>
      <p>This is the Expenses tab</p>
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
          {expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>{expense.name}</TableCell>
              <TableCell>{expense.amount}</TableCell>
              <TableCell>
                {group.persons.find((person) => person.id === expense.paidBy)?.name || 'Unknown'}
              </TableCell>
              <TableCell>
                {expense.beneficiaries
                  .map((personId) => group.persons.find((person) => person.id === personId)?.name || 'Unknown')
                  .join(', ')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default ExpensesTab;
