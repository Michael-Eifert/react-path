import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Popup from '../components/Popup'
import { Group } from '../model/Group'
import GroupElement from '../components/GroupElement'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const GroupPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [groups, setGroups] = useState<Array<Group>>([])

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  const onConfirmPopup = (newGroup: Group) => {
    console.log('You created a new group:', newGroup)
    setGroups([...groups, newGroup])
  }

  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        sx={{ mt: 4, mb: 4, fontWeigt: 'bold' }}
      >
        Your Groups
      </Typography>
      <Box mb={2}>
        <Button variant="contained" onClick={handleOpen}>
          Create new Group
        </Button>
      </Box>
      <Popup
        open={isOpen}
        handleClose={handleClose}
        handleConfirm={onConfirmPopup}
      />
      <Box>
        {groups.map((group) => (
          <GroupElement key={group.id} group={group} />
        ))}
      </Box>
    </>
  )
}

export default GroupPage
