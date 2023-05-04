import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Popup from '../components/Popup'
import { Group } from '../model/Group'
import GroupElement from '../components/GroupElement'
import Box from '@mui/material/Box'
import PageTitle from '../components/PageTitle'
import { useGroupContext } from '../context/GroupContext'
import GroupInput from '../components/popupInputs/GroupInput'

const GroupPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { groups, setGroups } = useGroupContext()

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  const onConfirmPopup = (newGroup: Group) => {
    console.log('You created a new group:', newGroup)
    setGroups([...groups, newGroup])
  }

  return (
    <>
      <PageTitle title={'Your Groups'}></PageTitle>
      <Box mb={2}>
        <Button variant="contained" onClick={handleOpen}>
          Create new Group
        </Button>
      </Box>
      <Popup open={isOpen} handleClose={handleClose}>
        <GroupInput onConfirm={onConfirmPopup} handleClose={handleClose} />
      </Popup>
      <Box>
        {groups.map((group) => (
          <GroupElement key={group.id} group={group} />
        ))}
      </Box>
    </>
  )
}

export default GroupPage
