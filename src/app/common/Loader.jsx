import React from 'react'
import { Box, LinearProgress, Typography } from '@mui/material'

const Loader = () => {
  return (
    <Box px={0} py={2}>
      <LinearProgress value={30} />
    </Box>
  )
}

export default Loader
