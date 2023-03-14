import React from 'react'
import Button from '@mui/material/Button'
import Popup from '../components/Popup'

const Group: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <h1>Groups</h1>
      <Button variant="contained" onClick={handleOpen}>
        Create new Group
      </Button>
      <Popup open={open} handleClose={handleClose}></Popup>
    </>
  )
}

export default Group
