import { useParams } from 'react-router-dom'
import { useGroupContext } from '../../context/GroupContext'
import PageTitle from '../../components/PageTitle'
import { useState } from 'react'
import GroupTabs from '../../components/GroupTabs'
import { Box, IconButton, InputAdornment, TextField } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import EditIcon from '@mui/icons-material/Edit'

const GroupDetailPage: React.FC = () => {
  const [openNameEdit, setOpenNameEdit] = useState(false)

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
    setOpenNameEdit(false)
  }

  if (!group) {
    return <div>Group not found</div>
  }

  const showGroupName = () => {
    return openNameEdit ? (
      <Box sx={{ mt: 5, mb: 2 }}>
        <TextField
          label="Change Group Name"
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
    ) : (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <PageTitle title={`${group.name}`} />
        <IconButton
          sx={{ width: 32, height: 32, ml: 2 }}
          color="primary"
          aria-label="edit name"
          component="label"
          onClick={() => setOpenNameEdit(true)}
        >
          <EditIcon />
        </IconButton>
      </Box>
    )
  }

  return (
    <>
      {showGroupName()}
      <GroupTabs
        group={group}
        tabValue={tabValue}
        handleChange={handleChange}
      />
    </>
  )
}

export default GroupDetailPage
