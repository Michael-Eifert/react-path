// Import any necessary dependencies
import React from 'react'
import { Box } from '@mui/material'
import { Group } from '../../model/Group'

interface ExpensesTabProps {
  group: Group
}

const ExpensesTab: React.FC<ExpensesTabProps> = ({ group }) => {
  return (
    <Box>
      <p>This is the Expenses tab</p>
    </Box>
  )
}

export default ExpensesTab
