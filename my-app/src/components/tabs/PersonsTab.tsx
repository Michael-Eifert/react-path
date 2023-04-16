// Import any necessary dependencies
import React from 'react'
import { Fab, Grid, styled } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { Group } from '../../model/Group'
import PersonList from '../PersonList'

interface PersonsTabProps {
  group: Group
}

const PersonListWrapper = styled(Grid)({
  textAlign: 'center',
  margin: 'auto',
})

const PersonsTab: React.FC<PersonsTabProps> = ({ group }) => {
  const handleAddPersonClick = () => {
    // You can implement adding a person to the group here later.
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
    </Grid>
  )
}

export default PersonsTab
