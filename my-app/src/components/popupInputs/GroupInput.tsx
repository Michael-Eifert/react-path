// TODO: Fix linting
/* eslint-disable react/prop-types */
import { Box, TextField, Typography } from '@mui/material'
import ConfirmButton from '../ConfirmButton'
import { generateId } from '../../modules/idGenerator'
import { Group } from '../../model/Group'
import { useState } from 'react'

interface GroupInputProps {
  onConfirm: (newGroup: Group) => void
  handleClose: () => void
}

const GroupInput: React.FC<GroupInputProps> = ({ onConfirm, handleClose }) => {
  const [groupName, setGroupName] = useState('')

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value)
  }

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault()
    const newGroup: Group = {
      id: generateId(),
      name: groupName,
      persons: [],
      expenses: [],
    }
    onConfirm(newGroup)
    setGroupName('')
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
        <ConfirmButton onSubmit={handleConfirm} />
      </form>
    </Box>
  )
}

export default GroupInput
