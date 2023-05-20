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
import { roundUp } from '../modules/expense.utils'

interface PersonCardProps {
  person: Person
  currency: string
  onRemove: (id: string) => void
}

const PersonCard: React.FC<PersonCardProps> = ({
  person,
  onRemove,
  currency,
}) => {
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
          <ListItemText
            primary={person.name}
            secondary={`${roundUp(person.balance)} ${currency}`} // display balance and currency
          />
          <IconButton onClick={handleRemoveClick}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      </CardContent>
    </Card>
  )
}

export default PersonCard
