import React, { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

interface Props {
  open: boolean
  handleClose: () => void
  children: ReactNode
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

const Popup: React.FC<Props> = ({ open, handleClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      data-testid="modal"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  )
}

export default Popup
