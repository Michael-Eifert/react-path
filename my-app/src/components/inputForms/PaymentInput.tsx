/* eslint-disable react/prop-types */
import { Box, MenuItem, Select, TextField, Typography } from '@mui/material'
import ConfirmButton from '../ConfirmButton'
import { useState } from 'react'
import { Group } from '../../model/Group'

interface PaymentInputProps {
  group: Group
  onConfirm: (
    paymentAmount: number,
    payerId: string,
    recipientId: string,
  ) => void
  handleClose: () => void
}

const PaymentInput: React.FC<PaymentInputProps> = ({
  group,
  onConfirm,
  handleClose,
}) => {
  const [amount, setAmount] = useState(0)
  const [payerId, setPayerId] = useState('')
  const [recipientId, setRecipientId] = useState('')

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault()
    onConfirm(amount, payerId, recipientId)
    setAmount(0)
    setPayerId('')
    setRecipientId('')
    handleClose()
  }

  return (
    <Box component="form" sx={{ mt: 1 }}>
      <Typography component="h2" variant="h6">
        Add a new payment
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="amount"
        label="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        type="number"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="payer"
        select
        label="Payer"
        defaultValue=""
        value={payerId}
        onChange={(e) => setPayerId(e.target.value)}
      >
        {group.persons.map((person) => (
          <MenuItem key={person.id} value={person.id}>
            {person.name}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        margin="normal"
        required
        fullWidth
        id="recipient"
        select
        label="Recipient"
        defaultValue=""
        value={recipientId}
        onChange={(e) => setRecipientId(e.target.value)}
      >
        {group.persons.map((person) => (
          <MenuItem key={person.id} value={person.id}>
            {person.name}
          </MenuItem>
        ))}
      </TextField>
      <ConfirmButton onSubmit={handleConfirm} buttonText="Confirm" />
    </Box>
  )
}

export default PaymentInput
