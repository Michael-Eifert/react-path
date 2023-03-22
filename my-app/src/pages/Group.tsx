import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Popup from '../components/Popup'

const Group: React.FC = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const onConfirmPopup = () => {
    console.log('you called the confirm button')
  }

  return (
    <>
      <h1>Groups</h1>
      <Button variant="contained" onClick={handleOpen}>
        Create new Group
      </Button>
      <Popup open={open} handleClose={handleClose} handleConfirm={onConfirmPopup}></Popup>
    </>
  )
}

export default Group
