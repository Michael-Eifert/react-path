// TODO: Can be used in the future maybe
import { createContext, useContext } from 'react'

type PopupContextType = {
  handleClose: () => void
}

const PopupContext = createContext<PopupContextType>({
  handleClose: () => {
    return null
  },
})

export const usePopupContext = () => useContext(PopupContext)

export default PopupContext
