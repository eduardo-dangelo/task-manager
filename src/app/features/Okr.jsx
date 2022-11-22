import React, { useState } from 'react'
import { Box, Card, Checkbox, Chip, Collapse, Divider, IconButton, Typography } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ProgressBar from '../common/ProgressBar'
import Description from '../common/Description'
import TrashButton from '../common/TrashButton'
import OkrTitle from './OKRTitle'
import StatusSelect from '../common/StatusSelect'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import UnfoldMoreDoubleIcon from '@mui/icons-material/UnfoldMoreDouble'
import ExpandIcon from '@mui/icons-material/Expand'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp'
import TaskBuilder from './TaskBuilder'

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
        <Box flex='auto' sx={{ cursor: 'pointer' }}>
          <OkrTitle value={title} onUpdate={onChange} />
        </Box>
        <Box flex={1} />
        <Box flex={1}>
          <ProgressBar value={40} />
        </Box>
        <StatusSelect />
        <IconButton onClick={() => setExpanded(!expanded)} size='small' sx={{ ml: 1 }}>
          <KeyboardArrowDownSharpIcon
            sx={{
              transform: expanded ? 'rotate(-180deg)' : 'rotate(0)',
              transition: '0.2s',
            }}
          />
        </IconButton>
        <TrashButton className='hidden-button' onDelete={onDelete} sx={{ ml: 1 }} />
      </Box>
      <Collapse in={expanded}>
        <Box px={3}>
          <Divider />
        </Box>
        <Box p={3} pt={0}>
          <Description initialValue={description} />
          <TaskBuilder />
        </Box>
      </Collapse>
    </Card>
  )
}

export default Okr
