// Import any necessary dependencies
import React, { useState } from 'react'
import { Fab, Grid, styled } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { Group, Person } from '../../model/Group'
import PersonList from '../PersonList'
import Popup from '../Popup'
import { addPersonToGroup } from '../../modules/person.utils'
import { useGroupContext } from '../../context/GroupContext'
import PersonInput from '../inputForms/PersonInput'
import { generateId } from '../../modules/idGenerator'
import ConfirmButton from '../ConfirmButton'
import PaymentInput from '../inputForms/PaymentInput'
import { processPayment } from '../../modules/payment'

interface PersonsTabProps {
  group: Group
}

const PersonListWrapper = styled(Grid)({
  textAlign: 'center',
  margin: 'auto',
})

const PersonsTab: React.FC<PersonsTabProps> = ({ group }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isSettleUpOpen, setIsSettleUpOpen] = useState(false)
  const { updateGroup } = useGroupContext()

  const handleAddPersonClick = () => {
    setIsPopupOpen(true)
  }

  const handleCloseAddPersonPopup = () => {
    setIsPopupOpen(false)
  }

  const handleCloseSettleUpPopup = () => {
    setIsSettleUpOpen(false)
  }

  const handleAddNewPerson = (newPersonName: string) => {
    const newPerson: Person = {
      id: generateId(),
      name: newPersonName,
      balance: 0,
      debts: [],
      payments: [],
    }
    const updatedGroup = addPersonToGroup(group, newPerson)
    updateGroup(updatedGroup)
  }

  const handleAddNewPayment = (
    paymentAmount: number,
    payerId: string,
    recipientId: string,
  ) => {
    const updatedGroup = processPayment(
      group,
      payerId,
      recipientId,
      paymentAmount,
    )
    updateGroup(updatedGroup)
  }

  return (
    <Grid container data-testid="persons-tab">
      <Grid item xs={3} sx={{ textAlign: 'center', pl: 3 }} />
      <PersonListWrapper item xs={6}>
        <PersonList group={group} />
      </PersonListWrapper>
      <Grid item xs={3} sx={{ textAlign: 'center', pr: 3 }}>
        <Fab color="primary" aria-label="add" onClick={handleAddPersonClick}>
          <AddIcon />
        </Fab>
        <br />
        <ConfirmButton
          onSubmit={() => setIsSettleUpOpen(true)}
          buttonText="Settle Up"
        ></ConfirmButton>
      </Grid>
      <Popup open={isPopupOpen} handleClose={handleCloseAddPersonPopup}>
        <PersonInput
          onConfirm={handleAddNewPerson}
          handleClose={handleCloseAddPersonPopup}
        />
      </Popup>
      <Popup open={isSettleUpOpen} handleClose={handleCloseSettleUpPopup}>
        <PaymentInput
          group={group}
          onConfirm={handleAddNewPayment}
          handleClose={handleCloseSettleUpPopup}
        />
      </Popup>
    </Grid>
  )
}

export default PersonsTab
