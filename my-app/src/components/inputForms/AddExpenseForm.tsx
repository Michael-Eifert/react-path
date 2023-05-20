// src/components/AddExpenseForm.tsx
import React, { useState } from 'react'
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'
import ConfirmButton from '../ConfirmButton'
import { Group } from '../../model/Group'

interface AddExpenseFormProps {
  onSubmit: (
    expenseName: string,
    amount: number,
    paidBy: string,
    beneficiaries: string[],
  ) => void
  group: Group
  handleClose: () => void
}

const AddExpenseForm: React.FC<AddExpenseFormProps> = ({
  onSubmit,
  group,
  handleClose,
}) => {
  const [expenseName, setExpenseName] = useState('')
  const [amount, setAmount] = useState('')
  const [paidBy, setPaidBy] = useState('')
  const [beneficiaries, setBeneficiaries] = useState<string[]>([])

  const handleSubmit = () => {
    onSubmit(expenseName, parseFloat(amount), paidBy, beneficiaries)
    handleClose()
  }

  const handleBeneficiaryChange = (personId: string) => {
    if (beneficiaries.includes(personId)) {
      setBeneficiaries(beneficiaries.filter((id) => id !== personId))
    } else {
      setBeneficiaries([...beneficiaries, personId])
    }
  }

  return (
    <Box component="form" sx={{ mt: 1 }}>
      <Typography component="h2" variant="h6">
        Add Expense
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="expenseName"
        label="Expense Name"
        value={expenseName}
        onChange={(e) => setExpenseName(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="amount"
        label="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="paidBy"
        select
        label="Paid By"
        defaultValue=""
        value={paidBy}
        onChange={(e) => setPaidBy(e.target.value)}
      >
        {group.persons.map((person) => (
          <MenuItem key={person.id} value={person.id}>
            {person.name}
          </MenuItem>
        ))}
      </TextField>
      <FormControl component="fieldset" fullWidth margin="normal">
        <Typography component="legend">Beneficiaries</Typography>
        <FormGroup>
          {group.persons.map((person) => (
            <FormControlLabel
              key={person.id}
              control={
                <Checkbox
                  checked={beneficiaries.includes(person.id)}
                  onChange={() => handleBeneficiaryChange(person.id)}
                />
              }
              label={person.name}
            />
          ))}
        </FormGroup>
      </FormControl>
      <ConfirmButton onSubmit={handleSubmit} buttonText="Confirm" />
    </Box>
  )
}

export default AddExpenseForm
