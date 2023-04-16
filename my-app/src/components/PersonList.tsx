import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Group, Person } from '../model/Group'
import PersonCard from './PersonCard'

interface PersonListProps {
  group: Group
}

const PersonList: React.FC<PersonListProps> = ({ group }) => {
  return (
    <>
      <Typography variant="h6" align="center">
        Persons:
      </Typography>
      <Box sx={{ my: 2 }}>
        <Grid container spacing={3} justifyContent="center">
          {group.persons.map((person: Person) => (
            <Grid item xs={12} sm={12} md={6} lg={6} key={person.id}>
              <PersonCard person={person} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default PersonList
