import React from 'react'
import { Box } from '@mui/material'
import Sidebar from '../Sidebar/Sidebar'
import CssBaseline from '@mui/material/CssBaseline'
import Breadcrumb from './Breadcrumb'

const PageLayout = ({ children, title }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'stretch',
        width: '100%',
        flex: 1,
      }}
    >
      <CssBaseline />
      <Sidebar />
      <Box sx={{ flex: 1, overflowY: 'scroll' }}>
        <Breadcrumb title={title} />
        <Box
          sx={{
            p: 3,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default PageLayout
