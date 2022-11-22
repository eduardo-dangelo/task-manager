import React, { useState } from 'react'
import { Box, Card, Collapse, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { rotate90IconStyle } from '../constants'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import Tooltip from '@mui/material/Tooltip'
import Okr from './Okr'
import uuid from 'react-uuid'
import { TransitionGroup } from 'react-transition-group'
import AddItem from '../common/AddItem'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'

const mockOKR = {
  id: 1,
  title: 'Finish Task Manager app',
  description: '<p>Add description</p>',
}

const OkRs = () => {
  const [data, setData] = useState([mockOKR])
  const [isAdding, setIsAdding] = useState(false)
  const [error, setError] = useState('')

  const handleAddOKR = (value) => {
    const initialValues = {
      id: uuid(),
      title: value,
      description: '<p>Add description</p>',
    }
    setData([...data, initialValues])
    setIsAdding(false)
  }

  const submit = (fieldValue) => {
    let errorMessage = ''
    if (!fieldValue) errorMessage = 'Field cannot be empty.'
    errorMessage ? setError(errorMessage) : handleAddOKR(fieldValue)
  }

  const handleClickAddOKR = () => {
    setIsAdding(true)
    error && setError(false)
  }

  const handleDismiss = () => {
    setIsAdding(false)
    error && setError(false)
  }

  const handleDeleteOKR = (id) => {
    const newList = data.filter((okr) => okr.id !== id)
    setData(newList)
  }

  const handleUpdateOKR = (title, index) => {
    const newList = JSON.parse(JSON.stringify(data))
    newList[index].title = title
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
          <IconButton size='large' sx={rotate90IconStyle} onClick={handleClickAddOKR}>
            <AddCircleOutlineIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <TransitionGroup>
        {data.map(({ id, title, description }, index) => {
          return (
            <Collapse key={id}>
              <Okr
                title={title}
                description={description}
                onDelete={() => handleDeleteOKR(id)}
                onChange={(value) => handleUpdateOKR(value, index)}
              />
            </Collapse>
          )
        })}
        {data.length === 0 && !isAdding && (
          <Collapse>
            <Typography p={2}>no OKR found.</Typography>
          </Collapse>
        )}
        {isAdding && (
          <Collapse>
            <Card
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                pl: 2,
                px: 2,
                pt: 2,
                pb: error ? 3 : 2,
              }}
            >
              <RadioButtonUncheckedIcon />
              <AddItem
                sx={{ ml: 2 }}
                fullWidth
                onSubmit={submit}
                onCancel={handleDismiss}
                onBlur={handleDismiss}
                error={error}
                onChange={() => error && setError(false)}
              />
            </Card>
          </Collapse>
        )}
      </TransitionGroup>
    </Box>
  )
}

export default OkRs
