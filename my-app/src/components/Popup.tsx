import React, { useState, FormEvent } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Group, Person } from '../model/Group'
import { generateId } from '../modules/idGenerator'

interface Props {
  open: boolean
  handleClose: () => void
  handleConfirm: (data: any) => void
  type: 'group' | 'person'
  title: string
  description: string

  nameInputLabel: string
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

const Popup: React.FC<Props> = ({
  open,
  handleClose,
  handleConfirm,
  type,
  title,
  description,
  nameInputLabel,
}) => {
  const [inputName, setInputName] = useState('')

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value)
  }

  const onHandleConfirm = (event: FormEvent) => {
    event.preventDefault() // Prevent the default form submission behavior
    if (type === 'group') {
      const newGroup: Group = {
        id: generateId(),
        name: inputName,
        persons: [],
        expenses: [],
      }
      handleConfirm(newGroup)
    } else if (type === 'person') {
      const newPerson: Person = {
        id: generateId(),
        name: inputName,
        balance: 0,
      }
      handleConfirm(newPerson)
    }
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
          {title}
        </Typography>
        <Typography id="box-description" variant="body1" sx={{ mt: 2 }}>
          {description}
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
    </Modal>
  )
}

export default Popup
