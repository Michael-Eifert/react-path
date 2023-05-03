import React, { useState, FormEvent } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { Expense, Group, Person } from '../model/Group'
import { generateId } from '../modules/idGenerator'
import PersonInput from './popupInputs/PersonInput'
import { PopupType } from '../model/Popup'
import GroupInput from './popupInputs/GroupInput'
import ExpenseInput from './popupInputs/ExpenseInputProps'

interface Props {
  open: boolean
  handleClose: () => void
  handleConfirm: (data: any) => void
  type: PopupType
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

const Popup: React.FC<Props> = ({ open, handleClose, handleConfirm, type }) => {
  const [inputName, setInputName] = useState('')

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value)
  }

  const onHandleConfirm = (event: FormEvent) => {
    event.preventDefault() // Prevent the default form submission behavior

    let newItem: Group | Person | Expense

    switch (type) {
      case PopupType.GROUP:
        newItem = {
          id: generateId(),
          name: inputName,
          persons: [],
          expenses: [],
        }
        break
      case PopupType.PERSON:
        newItem = {
          id: generateId(),
          name: inputName,
          balance: 0,
        }
        break
      default:
        throw new Error(`Type not handled: ${type}`)
    }

    handleConfirm(newItem)
    handleClose()
  }

  const renderInput = () => {
    switch (type) {
      case PopupType.PERSON:
        return (
          <PersonInput
            onChangeName={onChangeName}
            onHandleConfirm={onHandleConfirm}
          />
        )
      case PopupType.GROUP:
        return (
          <GroupInput
            onChangeName={onChangeName}
            onHandleConfirm={onHandleConfirm}
          />
        )

      case PopupType.EXPENSE:
        return (
          <ExpenseInput
            onChangeName={onChangeName}
            onHandleConfirm={onHandleConfirm}
          />
        )
      default:
        throw new Error(`Type not handled: ${type}`)
    }
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      data-testid="modal"
    >
      <Box sx={style}>{renderInput()}</Box>
    </Modal>
  )
}

export default Popup
