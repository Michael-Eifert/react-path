// TODO: Fix linting
/* eslint-disable react/prop-types */
import { Box, Button, TextField, Typography } from '@mui/material'

interface GroupInputProps {
  onChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void
  onHandleConfirm: (event: React.FormEvent) => void
  nameInputLabel: string
}

const GroupInput: React.FC<GroupInputProps> = ({
  onChangeName,
  onHandleConfirm,
  nameInputLabel,
}) => {
  return (
    <Box>
      <Typography id="box-title" variant="h4" component="h2">
        {'Add a new group'}
      </Typography>
      <Typography id="box-description" variant="body1" sx={{ mt: 2 }}>
        {'Fill in the information below to add a new group.'}
      </Typography>
      <form onSubmit={onHandleConfirm}>
        <TextField
          autoFocus={true}
          margin="dense"
          id="name"
          label={nameInputLabel}
          fullWidth
          variant="standard"
          onChange={onChangeName}
        />
        <Button
          sx={{ mt: '6px' }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Confirm
        </Button>
      </form>
    </Box>
  )
}

export default GroupInput
