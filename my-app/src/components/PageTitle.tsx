import Typography from '@mui/material/Typography'
import React from 'react'

interface PageTitleProps {
  title: string
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <Typography
      variant="h4"
      component="h1"
      sx={{ mt: 4, mb: 4, fontWeigt: 'bold' }}
    >
      {title}
    </Typography>
  )
}

export default PageTitle
