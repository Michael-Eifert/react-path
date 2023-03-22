import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

interface Props {
  open: boolean
  handleClose: () => void
  handleConfirm: () => void // Here you have to return the group object
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const Popup: React.FC<Props> = ({ open, handleClose, handleConfirm }) => {
  const [groupName, setGroupName] = useState('')
  const onChangeGroupName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(event.target.value)
    console.log('Changed groupName: ', groupName)
  }
  const onHandleConfirm = () => {
    handleConfirm()
    handleClose()
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      data-testid="modal"
    >
      <Box sx={style}>
        <Typography id="box-title" variant="h4" component="h2">
          Create your Group
        </Typography>
        <Typography id="box-description" variant="body1" sx={{ mt: 2 }}>
          Fill in your group information to create a new group to manage.
        </Typography>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Groupname"
            fullWidth
            variant="standard"
            onChange={onChangeGroupName}
          />
        <Button sx={{mt: '6px'}} variant="contained" color="primary" onClick={onHandleConfirm}>Confirm</Button>
      </Box>

    </Modal>
  )
}

export default Popup
