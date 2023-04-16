import { useParams } from 'react-router-dom'
import { useGroupContext } from '../../context/GroupContext'
import PageTitle from '../../components/PageTitle'
import { useState } from 'react'
import GroupTabs from '../../components/GroupTabs'
import { Box, IconButton, InputAdornment, TextField } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'

const GroupDetailPage: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>()
  const { getGroupById, updateGroup } = useGroupContext()
  const group = getGroupById(groupId)

  const [groupName, setGroupName] = useState(group?.name || '')

  const [tabValue, setTabValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(event.target.value)
  }

  const handleNameSave = () => {
    if (group) {
      const updatedGroup = { ...group, name: groupName }
      updateGroup(updatedGroup)
    }
  }

  if (!group) {
    return <div>Group not found</div>
  }

  return (
    <>
      <PageTitle title={`Group: ${group.name}`} />
      <Box sx={{ mb: 2 }}>
        <TextField
          label="You can change the group name here"
          value={groupName}
          onChange={handleNameChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleNameSave}>
                  <SaveIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <GroupTabs
        group={group}
        tabValue={tabValue}
        handleChange={handleChange}
      />
    </>
  )
}

export default GroupDetailPage
