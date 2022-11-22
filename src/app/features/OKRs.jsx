import React, { useState } from 'react'
import { Box, Collapse, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { rotate90IconStyle } from '../constants'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import Tooltip from '@mui/material/Tooltip'
import Okr from './Okr'
import uuid from 'react-uuid'
import { TransitionGroup } from 'react-transition-group'

const mockOKR = {
  id: 1,
  title: 'Finish Task Manager app',
  description: '<p>Add description</p>',
}

const OkRs = () => {
  const [data, setData] = useState([mockOKR])

  const handleAddOKR = () => {
    const initialValues = {
      id: uuid(),
      title: 'Add Title',
      description: '<p>Add description</p>',
    }
    setData([...data, initialValues])
  }

  const handleDeleteOKR = (id) => {
    const newList = data.filter((okr) => okr.id !== id)
    setData(newList)
  }

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
          <IconButton size='large' sx={rotate90IconStyle} onClick={handleAddOKR}>
            <AddCircleOutlineIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <TransitionGroup>
        {data.map(({ id, title, description }) => {
          return (
            <Collapse key={id}>
              <Okr title={title} description={description} onDelete={() => handleDeleteOKR(id)} />
            </Collapse>
          )
        })}
      </TransitionGroup>
    </Box>
  )
}

export default OkRs
