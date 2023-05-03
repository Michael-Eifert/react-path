import React from 'react'
import Button, { ButtonProps } from '@mui/material/Button'

interface ConfirmButtonProps extends Omit<ButtonProps, 'type'> {
  onSubmit?: (props?: any) => void
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({
  onSubmit,
  ...otherProps
}) => {
  return (
    <Button
      sx={{ mt: '6px' }}
      variant="contained"
      color="primary"
      type="submit"
      onClick={onSubmit}
      {...otherProps}
    >
      Confirm
    </Button>
  )
}

export default ConfirmButton
