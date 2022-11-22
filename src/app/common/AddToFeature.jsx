import React from 'react'
import { Box, Button, Card, Divider, Typography } from '@mui/material'
import ConstructionIcon from '@mui/icons-material/Construction'
import DirectionsRunRoundedIcon from '@mui/icons-material/DirectionsRunRounded'
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded'
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'

const AddToFeature = ({ title, onAdd = () => {} }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
      }}
    >
      <Typography p={2}>{title}</Typography>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          p: 2,
        }}
      >
        <Button
          onClick={() => onAdd('okr')}
          variant='outlined'
          startIcon={<CheckCircleOutlineRoundedIcon />}
          sx={{
            justifyContent: 'left',
            mb: 1,
          }}
        >
          OKRS
        </Button>
        <Button
          onClick={() => onAdd('checklist')}
          variant='outlined'
          startIcon={<CheckBoxRoundedIcon />}
          sx={{
            justifyContent: 'left',
            mb: 1,
          }}
        >
          CHECKLIST
        </Button>
        <Button
          onClick={() => onAdd('sprint')}
          variant='outlined'
          startIcon={<DirectionsRunRoundedIcon />}
          sx={{
            justifyContent: 'left',
            mb: 1,
          }}
        >
          SPRINTS
        </Button>
        <Button
          onClick={() => onAdd('notes')}
          variant='outlined'
          startIcon={<DescriptionRoundedIcon />}
          sx={{
            justifyContent: 'left',
            mb: 1,
          }}
        >
          NOTES
        </Button>
        <Button
          onClick={() => onAdd('tasks')}
          variant='outlined'
          startIcon={<ConstructionIcon />}
          sx={{
            justifyContent: 'left',
          }}
        >
          TASK BUILDER
        </Button>
      </Box>
    </Card>
  )
}

export default AddToFeature
