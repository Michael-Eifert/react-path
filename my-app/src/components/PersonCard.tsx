import React from 'react'
import {
  Card,
  CardContent,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Person } from '../model/Group'

interface PersonCardProps {
  person: Person
  onRemove: (id: string) => void
}

const PersonCard: React.FC<PersonCardProps> = ({ person, onRemove }) => {
  const handleRemoveClick = () => {
    onRemove(person.id)
  }

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
          <IconButton onClick={handleRemoveClick}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      </CardContent>
    </Card>
  )
}

export default PersonCard
