import React from 'react'
import { Box, LinearProgress, Typography, linearProgressClasses, Chip } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Line } from 'react-chartjs-2'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}))

const ProgressBar = (props) => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }} {...props}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <BorderLinearProgress variant='determinate' {...props} />
      </Box>

      <Box sx={{ minWidth: 35 }}>
        <Typography variant='body2' color='text.secondary'>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
      <Chip label='active' size='small' sx={{ ml: 2 }} />
    </Box>
  )
}

export default ProgressBar
