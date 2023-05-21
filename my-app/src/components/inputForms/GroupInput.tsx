// TODO: Fix linting
/* eslint-disable react/prop-types */
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'
import ConfirmButton from '../ConfirmButton'
import { generateId } from '../../modules/idGenerator'
import { Group } from '../../model/Group'
import { useState } from 'react'
import { currencies } from '../../config/currencies'

interface GroupInputProps {
  onConfirm: (newGroup: Group) => void
  handleClose: () => void
}

const GroupInput: React.FC<GroupInputProps> = ({ onConfirm, handleClose }) => {
  const [groupName, setGroupName] = useState('')
  const [groupCurrency, setGroupCurrency] = useState('')

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value)
  }

  const handleCurrencyChange = (e: SelectChangeEvent) => {
    setGroupCurrency(e.target.value as string)
  }

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault()
    const newGroup: Group = {
      id: generateId(),
      name: groupName,
      currency: groupCurrency,
      persons: [],
      expenses: [],
      payments: [],
    }
    onConfirm(newGroup)
    setGroupName('')
    setGroupCurrency('')
    handleClose() // Close the modal after confirming
  }
  return (
    <Box>
      <Typography id="box-title" variant="h4" component="h2">
        {'Add a new group'}
      </Typography>
      <Typography id="box-description" variant="body1" sx={{ mt: 2 }}>
        {'Fill in the information below to add a new group.'}
      </Typography>
      <form onSubmit={handleConfirm}>
        <TextField
          autoFocus={true}
          margin="dense"
          id="name"
          label="group name"
          fullWidth
          variant="standard"
          onChange={handleNameChange}
        />
        <FormControl sx={{ mt: 2 }} fullWidth>
          <InputLabel id="currency-label">Group Currency</InputLabel>
          <Select
            labelId="currency-label"
            id="currency"
            value={groupCurrency}
            label="Group Currency"
            onChange={handleCurrencyChange}
          >
            {currencies.map((currency) => (
              <MenuItem key={currency.value} value={currency.value}>
                {currency.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <ConfirmButton onSubmit={handleConfirm} buttonText="Confirm" />
      </form>
    </Box>
  )
}

export default GroupInput
