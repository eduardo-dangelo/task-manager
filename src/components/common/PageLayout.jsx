import React from 'react'
import { Box } from '@mui/material'
import Sidebar from '../Sidebar/Sidebar'
import CssBaseline from '@mui/material/CssBaseline'

const PageLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'strech' }}>
      <CssBaseline />
      <Sidebar />
      <Box p={3}>{children}</Box>
    </Box>
  )
}

export default PageLayout
