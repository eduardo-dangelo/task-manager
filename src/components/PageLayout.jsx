import React from 'react'
import { Box } from '@mui/material'
import Sidebar from './Sidebar/Sidebar'

const PageLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'strech' }}>
      <Sidebar />
      {children}
    </Box>
  )
}

export default PageLayout
