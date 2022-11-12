import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'

const Breadcrumb = ({ title }) => {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        background: 'black',
      }}
    >
      <Typography px={3} py={2}>
        {title}
      </Typography>
      <Divider />
    </Box>
  )
}

export default Breadcrumb
