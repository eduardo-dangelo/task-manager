import React from 'react'
import { Box, Card, LinearProgress, Typography } from '@mui/material'
import SportsScoreIcon from '@mui/icons-material/SportsScore'
import CollapsableList from '../common/CollapsableList/CollapsableList'
import IconButton from '@mui/material/IconButton'
import { rotate90IconStyle } from '../constants'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import Tooltip from '@mui/material/Tooltip'

const OkRs = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 1,
        }}
      >
        <Typography variant='h5' fontStyle='italic'>
          🏁 OKRS
        </Typography>
        <Tooltip title='New OKR'>
          <IconButton size='large' sx={rotate90IconStyle}>
            <AddCircleOutlineIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Card sx={{ mb: 1, p: 2 }}>
        Finish some bullshit task
        <LinearProgress value={30} />
      </Card>
    </Box>
  )
}

export default OkRs
