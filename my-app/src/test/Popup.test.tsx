import { render, screen } from '@testing-library/react'
import Popup from '../components/Popup'
import { PopupType } from '../model/Popup'

describe('Popup', () => {
  it('renders the component', () => {
    render(
      <Popup
        open={true}
        handleClose={jest.fn}
        handleConfirm={jest.fn}
        type={PopupType.GROUP}
        title=""
        description=""
        nameInputLabel=""
      ></Popup>,
    )
    const element = screen.getByTestId('modal')
    expect(element).toBeInTheDocument()
  })
})
