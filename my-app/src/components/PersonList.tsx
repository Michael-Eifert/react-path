import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Group, Person } from '../model/Group'
import PersonCard from './PersonCard'
import { useGroupContext } from '../context/GroupContext'

interface PersonListProps {
  group: Group
}

const PersonList: React.FC<PersonListProps> = ({ group }) => {
  const { updateGroup } = useGroupContext()

  const handlePersonRemove = (id: string) => {
    const updatedGroup = {
      ...group,
      persons: group.persons.filter((person) => person.id !== id),
    }
    updateGroup(updatedGroup)
  }

  return (
    <>
      <Typography variant="h6" align="center">
        Persons:
      </Typography>
      <Box sx={{ my: 2 }}>
        <Grid container spacing={3} justifyContent="center">
          {group.persons.map((person: Person) => (
            <Grid item xs={12} sm={12} md={6} lg={6} key={person.id}>
              <PersonCard person={person} onRemove={handlePersonRemove} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default PersonList
