// src/pages/GroupPage.tsx
import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Popup from '../components/Popup'
import { Group } from '../model/Group'
import GroupElement from '../components/GroupElement'

const GroupPage: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [groups, setGroups] = useState<Array<Group>>([])

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const onConfirmPopup = (newGroup: Group) => {
    console.log('You created a new group:', newGroup)
    setGroups([...groups, newGroup])
  }

  return (
    <>
      <h1>Groups</h1>
      <Button variant="contained" onClick={handleOpen}>
        Create new Group
      </Button>
      <Popup
        open={open}
        handleClose={handleClose}
        handleConfirm={onConfirmPopup}
      ></Popup>
      <div>
        {groups.map((group) => (
          <GroupElement key={group.id} group={group} />
        ))}
      </div>
    </>
  )
}

export default GroupPage
