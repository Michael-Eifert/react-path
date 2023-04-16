import React from 'react'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'
import { Group, Person } from '../model/Group'

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
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Card>
              <CardContent>
                <List>
                  {group.persons.map((person: Person, index: number) => (
                    <React.Fragment key={person.id}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ backgroundColor: 'royalblue' }}>
                            {person.name.slice(0, 2)}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={person.name} />
                      </ListItem>
                      {index < group.persons.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default PersonList
