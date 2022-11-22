import React, { useState } from 'react'
import { Box, Card, Checkbox, Chip, Collapse, Divider, Typography } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ProgressBar from '../common/ProgressBar'
import Description from './Description'
import TrashButton from '../common/TrashButton'
import OkrTitle from './OKRTitle'

const Okr = ({ title, description, onDelete, onChange = () => {} }) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <Card sx={{ mb: 1 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pl: 1,
          pr: 2,
          py: 1,
        }}
      >
        <Checkbox
          sx={{ mr: 1 }}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
        />
        <Box flex={2} sx={{ cursor: 'pointer' }} onClick={() => setExpanded(!expanded)}>
          <OkrTitle value={title} onUpdate={onChange} />
        </Box>
        <Box flex={1}>
          <ProgressBar value={40} />
        </Box>
        <Chip label='active' size='small' sx={{ ml: 2 }} />
        <TrashButton className='hidden-button' onDelete={onDelete} sx={{ ml: 1 }} />
      </Box>
      <Collapse in={expanded}>
        <Box px={3}>
          <Divider />
        </Box>
        <Box p={3} pt={0}>
          <Description initialValue={description} />
        </Box>
      </Collapse>
    </Card>
  )
}

export default Okr
