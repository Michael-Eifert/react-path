/* eslint-disable @typescript-eslint/ban-types */
import { ComponentType, FC } from 'react'

export type Route = {
  key: string
  title: string
  description: string
  element?: FC<{}>
  path: string
  isEnabled: boolean
  icon?: ComponentType
  subPage?: boolean
}
