/* eslint-disable react/prop-types */
import { Box, Button, TextField, Typography } from '@mui/material'
import ConfirmButton from '../ConfirmButton'

interface PersonInputProps {
  onChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void
  onHandleConfirm: (event: React.FormEvent) => void
}

const PersonInput: React.FC<PersonInputProps> = ({
  onChangeName,
  onHandleConfirm,
}) => {
  return (
    <Box>
      <Typography id="box-title" variant="h4" component="h2">
        {'Add a new person'}
      </Typography>
      <Typography id="box-description" variant="body1" sx={{ mt: 2 }}>
        {'Fill in the information below to add a new person to the group.'}
      </Typography>
      <form onSubmit={onHandleConfirm}>
        <TextField
          autoFocus={true}
          margin="dense"
          id="name"
          label="person name"
          fullWidth
          variant="standard"
          onChange={onChangeName}
        />
        <ConfirmButton onSubmit={onHandleConfirm} />
      </form>
    </Box>
  )
}

export default PersonInput
