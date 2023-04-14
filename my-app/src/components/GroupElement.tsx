// src/components/GroupElement.tsx
import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Group } from '../model/Group'

interface Props {
  group: Group
}

const GroupElement: React.FC<Props> = ({ group }) => {
  return (
    <Card sx={{ minWidth: 275, marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {group.name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default GroupElement
