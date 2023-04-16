// Import any necessary dependencies
import React from 'react'
import { Box } from '@mui/material'
import { Group } from '../../model/Group'

interface PersonsTabProps {
  group: Group
}

const PersonsTab: React.FC<PersonsTabProps> = ({ group }) => {
  // Any tab-specific state or logic should go here

  return (
    <Box>
      <p>This is the Persons tab</p>
    </Box>
  )
}

export default PersonsTab
