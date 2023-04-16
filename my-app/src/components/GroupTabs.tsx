import React from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import PersonsTab from './tabs/PersonsTab'
import { Group } from '../model/Group'
import ExpensesTab from './tabs/ExpensesTab'
import SettleUpTab from './tabs/SettleUpTab'

interface GroupTabProps {
  group: Group
  tabValue: number
  handleChange: (event: React.SyntheticEvent, newValue: number) => void
}

const GroupTabs: React.FC<GroupTabProps> = ({
  group,
  tabValue,
  handleChange,
}) => {
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="Group tabs"
          centered
        >
          <Tab label="Persons" />
          <Tab label="Expenses" />
          <Tab label="Settle Up" />
        </Tabs>
      </Box>
      <Box mt={4}>
        {tabValue === 0 && <PersonsTab group={group} />}
        {tabValue === 1 && <ExpensesTab group={group} />}
        {tabValue === 2 && <SettleUpTab group={group} />}
      </Box>
    </>
  )
}

export default GroupTabs
