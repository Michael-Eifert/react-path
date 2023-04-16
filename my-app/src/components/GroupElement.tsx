import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Group } from '../model/Group'
import { Button, CardActions } from '@mui/material'
import { Link } from 'react-router-dom'

interface Props {
  group: Group
}

const GroupElement: React.FC<Props> = ({ group }) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        mt: 5,
        bgcolor: 'rgba(190, 190, 190, 0.308)',
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {group.name}
        </Typography>
        <Typography variant="body1" component="div" sx={{ mt: 2 }}>
          {`Group Code: ${group.id}`}
        </Typography>
        <CardActions
          sx={{
            mt: '10px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            size="small"
            variant="contained"
            component={Link}
            to={`/group/${group.id}`}
          >
            Details
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default GroupElement
