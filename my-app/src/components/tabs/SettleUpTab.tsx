// Import any necessary dependencies
import React from 'react'
import { Box } from '@mui/material'
import { Group } from '../../model/Group'

interface SettleUpTabProps {
  group: Group
}

const SettleUpTab: React.FC<SettleUpTabProps> = ({ group }) => {

  return (
    <Box>
      <p>This is the Settle Up tab</p>
    </Box>
  )
}

export default SettleUpTab
