import React from 'react'
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import { Group, Person } from '../model/Group'

interface PersonListProps {
  group: Group
}

const PersonList: React.FC<PersonListProps> = ({ group }) => {
  return (
    <>
      <Typography variant="h6">Persons:</Typography>
      <List>
        {group.persons.map((person: Person) => (
          <ListItem key={person.id}>
            <ListItemText primary={person.name} />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default PersonList
