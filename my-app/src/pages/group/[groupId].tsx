import { useParams } from 'react-router-dom'
import { useGroupContext } from '../../context/GroupContext'
import PageTitle from '../../components/PageTitle'
import { useState } from 'react'
import GroupTabs from '../../components/GroupTabs'

const GroupDetailPage: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>()
  const { getGroupById } = useGroupContext()
  const group = getGroupById(groupId)

  const [tabValue, setTabValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  if (!group) {
    return <div>Group not found</div>
  }

  return (
    <>
      <PageTitle title={`Group: ${group.name}`} />
      <GroupTabs
        group={group}
        tabValue={tabValue}
        handleChange={handleChange}
      />
    </>
  )
}

export default GroupDetailPage
