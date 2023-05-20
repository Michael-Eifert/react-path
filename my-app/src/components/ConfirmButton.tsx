import React from 'react'
import Button, { ButtonProps } from '@mui/material/Button'

interface ConfirmButtonProps extends Omit<ButtonProps, 'type'> {
  buttonText?: string
  onSubmit?: (props?: any) => void
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({
  buttonText,
  onSubmit,
  ...otherProps
}) => {
  return (
    <Button
      sx={{ mt: 3 }}
      variant="contained"
      color="primary"
      type="submit"
      onClick={onSubmit}
      {...otherProps}
    >
      {buttonText ? buttonText : 'Confirm'}
    </Button>
  )
}

export default ConfirmButton
