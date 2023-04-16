import React, { createContext, useContext, useState } from 'react'
import { Group } from '../model/Group'

interface GroupContextData {
  groups: Group[]
  setGroups: (groups: Group[]) => void
  getGroupById: (id: string | undefined) => Group | undefined

  updateGroup: (updatedGroup: Group) => void
}

interface GroupProviderProps {
  children: React.ReactNode
}

const GroupContext = createContext<GroupContextData | null>(null)

const GroupProvider: React.FC<GroupProviderProps> = ({ children }) => {
  const [groups, setGroups] = useState<Group[]>([])
  const getGroupById = (id: string | undefined) => {
    return id ? groups.find((group) => group.id === id) : undefined
  }
  const updateGroup = (updatedGroup: Group) => {
    setGroups(
      groups.map((group) => {
        if (group.id === updatedGroup.id) {
          return updatedGroup
        }
        return group
      }),
    )

    console.log('You updated a group: ', updatedGroup)
  }

  const value = {
    groups,
    setGroups,
    getGroupById,
    updateGroup,
  }

  return <GroupContext.Provider value={value}>{children}</GroupContext.Provider>
}

export const useGroupContext = (): GroupContextData => {
  const context = useContext(GroupContext)
  if (!context) {
    throw new Error('useGroupContext must be used within a GroupProvider')
  }
  return context
}

export default GroupProvider
