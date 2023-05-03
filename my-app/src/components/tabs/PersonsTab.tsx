// Import any necessary dependencies
import React, { useState } from 'react'
import { Fab, Grid, styled } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { Group, Person } from '../../model/Group'
import PersonList from '../PersonList'
import Popup from '../Popup'
import { addPersonToGroup } from '../../modules/person.utils'
import { useGroupContext } from '../../context/GroupContext'
import { PopupType } from '../../model/Popup'

interface PersonsTabProps {
  group: Group
}

const PersonListWrapper = styled(Grid)({
  textAlign: 'center',
  margin: 'auto',
})

const PersonsTab: React.FC<PersonsTabProps> = ({ group }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const { updateGroup } = useGroupContext()

  const handleAddPersonClick = () => {
    setIsPopupOpen(true)
  }

  const handleCloseAddPersonPopup = () => {
    setIsPopupOpen(false)
  }

  const handleAddNewPerson = (newPerson: Person) => {
    const updatedGroup = addPersonToGroup(group, newPerson)
    updateGroup(updatedGroup)
  }

  return (
    <Grid container>
      <Grid item xs={3} sx={{ textAlign: 'center', pl: 3 }} />
      <PersonListWrapper item xs={6}>
        <PersonList group={group} />
      </PersonListWrapper>
      <Grid item xs={3} sx={{ textAlign: 'center', pr: 3 }}>
        <Fab color="primary" aria-label="add" onClick={handleAddPersonClick}>
          <AddIcon />
        </Fab>
      </Grid>
      <Popup
        open={isPopupOpen}
        handleClose={handleCloseAddPersonPopup}
        handleConfirm={handleAddNewPerson}
        type={PopupType.PERSON}
      />
    </Grid>
  )
}

export default PersonsTab
