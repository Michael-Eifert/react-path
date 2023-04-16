import React from 'react'
import {
  Card,
  CardContent,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material'
import { Person } from '../model/Group'

interface PersonCardProps {
  person: Person
}

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  return (
    <Card>
      <CardContent>
        <ListItem disablePadding>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: 'royalblue' }}>
              {person.name.slice(0, 2)}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={person.name} />
        </ListItem>
      </CardContent>
    </Card>
  )
}

export default PersonCard
