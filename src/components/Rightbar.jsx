import { Box } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box
      flex={1}
      bgcolor='lightpink'
      p={2}
      sx={{
        display: {
          xs: 'none',
          sm: 'block',
        },
      }}
    >
      Rightbar
    </Box>
  )
}

export default Rightbar
