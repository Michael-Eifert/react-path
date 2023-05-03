import { SxProps } from '@mui/system'
import { FormEvent } from 'react'

export enum PopupType {
  PERSON = 'PERSON',
  GROUP = 'GROUP',
  EXPENSE = 'EXPENSE',
}

export interface PopupInput {
  onChangeName: () => void
  onHandleConfirm: (event: FormEvent) => void
  style?: SxProps
}
