/* eslint-disable react/prop-types */
import { Box, TextField, Typography } from '@mui/material'
import ConfirmButton from '../ConfirmButton'
import { useState } from 'react'

interface PersonInputProps {
  onConfirm: (newPersonName: string) => void
  handleClose: () => void
}

const PersonInput: React.FC<PersonInputProps> = ({
  onConfirm,
  handleClose,
}) => {
  const [personName, setPersonName] = useState('')

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonName(e.target.value)
  }

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault()
    onConfirm(personName)
    setPersonName('')
    handleClose()
  }
  return (
    <Box>
      <Typography id="box-title" variant="h4" component="h2">
        {'Add a new person'}
      </Typography>
      <Typography id="box-description" variant="body1" sx={{ mt: 2 }}>
        {'Fill in the information below to add a new person to the group.'}
      </Typography>
      <form onSubmit={handleConfirm}>
        <TextField
          autoFocus={true}
          margin="dense"
          id="name"
          label="person name"
          fullWidth
          variant="standard"
          onChange={handleNameChange}
        />
        <ConfirmButton onSubmit={handleConfirm} />
      </form>
    </Box>
  )
}

export default PersonInput
