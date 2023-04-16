import React, { createContext, useContext, useState } from 'react'
import { Group } from '../model/Group'

interface GroupContextData {
  groups: Group[]
  setGroups: (groups: Group[]) => void
  getGroupById: (id: string | undefined) => Group | undefined
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

  const value = {
    groups,
    setGroups,
    getGroupById,
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
