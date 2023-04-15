import { useParams } from 'react-router-dom'
import { useGroupContext } from '../../context/GroupContext'
import PageTitle from '../../components/PageTitle'

const GroupDetailPage: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>()
  console.log({ groupId })
  const { getGroupById } = useGroupContext()
  const group = getGroupById(groupId)

  if (!group) {
    return <div>Group not found</div>
  }

  return (
    <>
      <PageTitle title={`Group Detail Page: ${group.name}`} />
      {/* Render more group details here */}
    </>
  )
}

export default GroupDetailPage
