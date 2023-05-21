import React, { useState } from 'react'
import { Box, Fab, Grid } from '@mui/material'
import { Expense, Group } from '../../model/Group'
import Popup from '../Popup'
import { useGroupContext } from '../../context/GroupContext'
import AddIcon from '@mui/icons-material/Add'
import { addExpenseToGroup } from '../../modules/expense.utils'
import ExpenseList from '../ExpenseList'
import AddExpenseForm from '../inputForms/AddExpenseForm'
import { generateId } from '../../modules/idGenerator'

interface ExpensesTabProps {
  group: Group
}

const ExpensesTab: React.FC<ExpensesTabProps> = ({ group }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const { updateGroup } = useGroupContext()

  const handleAddButtonClick = () => {
    setIsPopupOpen(true)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
  }

  const handleNewExpense = (
    expenseName: string,
    amount: number,
    paidBy: string,
    beneficiaries: string[],
  ) => {
    const newExpense: Expense = {
      id: generateId(),
      name: expenseName,
      amount,
      paidBy,
      beneficiaries,
    }
    const updatedGroup = addExpenseToGroup(group, newExpense)
    updateGroup(updatedGroup)
  }

  return (
    <Box>
      <Grid container mb={5} data-testid="expenses-tab">
        <Grid item xs={3} sx={{ textAlign: 'left', pl: 3 }} />
        <Grid item xs={6} sx={{ textAlign: 'center', px: 3 }}>
          <p>Add New Expenses</p>
          <Fab color="primary" aria-label="add" onClick={handleAddButtonClick}>
            <AddIcon />
          </Fab>
        </Grid>
        <Grid item xs={3} sx={{ textAlign: 'right', pl: 3 }} />
      </Grid>
      <ExpenseList group={group} />
      <Popup open={isPopupOpen} handleClose={handleClosePopup}>
        <AddExpenseForm
          onSubmit={handleNewExpense}
          group={group}
          handleClose={handleClosePopup}
        />
      </Popup>
    </Box>
  )
}

export default ExpensesTab
