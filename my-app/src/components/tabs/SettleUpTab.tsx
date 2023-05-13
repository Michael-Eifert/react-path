import React from 'react'
import { Box, List, ListItem, Typography } from '@mui/material'
import { Group } from '../../model/Group'

interface SettleUpTabProps {
  group: Group
}

const SettleUpTab: React.FC<SettleUpTabProps> = ({ group }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Typography variant="h6">Settle Up</Typography>
      <List>
        {group.persons.map((person) => (
          <ListItem key={person.id}>
            <Typography mr={1} variant="subtitle1">
              {person.name}
            </Typography>
            <Typography variant="body1">Balance: {person.balance}</Typography>
            {person.debts?.map((debt, index) => (
              <Typography key={index} variant="body2">
                Owes {debt.amount} to{' '}
                {group.persons.find((p) => p.id === debt.owedTo)?.name}
              </Typography>
            ))}
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default SettleUpTab
