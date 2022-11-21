import React from 'react'
import { Box, Card, LinearProgress, Typography } from '@mui/material'
import SportsScoreIcon from '@mui/icons-material/SportsScore'
import CollapsableList from '../common/CollapsableList/CollapsableList'
import IconButton from '@mui/material/IconButton'
import { rotate90IconStyle } from '../constants'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import Tooltip from '@mui/material/Tooltip'
import Loader from '../common/Loader'
import ProgressBar from '../common/ProgressBar'

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
      <Card sx={{ mb: 1, p: 2, display: 'flex' }}>
        <Box flex={2}>
          <Typography>Finish some bullshit task</Typography>
        </Box>
        <Box flex={1}>
          <ProgressBar value={40} />
        </Box>
      </Card>
    </Box>
  )
}

export default OkRs
