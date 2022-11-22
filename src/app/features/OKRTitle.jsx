import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import AddItem from '../common/AddItem'

const OkrTitle = ({ value, onUpdate = () => {} }) => {
  const [editMode, setEditMode] = useState(false)
  const [error, setError] = useState('')

  const submit = (fieldValue) => {
    console.log('calle', fieldValue)
    let errorMessage = ''
    if (!fieldValue) errorMessage = 'Field cannot be empty.'
    errorMessage ? setError(errorMessage) : onUpdate(fieldValue)
    setEditMode(false)
  }

  const handleDismiss = () => {
    setEditMode(false)
  }

  return (
    <Box>
      {!editMode && <Typography onClick={() => setEditMode(true)}>{value}</Typography>}
      {editMode && (
        <AddItem
          fullWidth
          initialValue={value}
          onSubmit={submit}
          onCancel={handleDismiss}
          onBlur={handleDismiss}
          error={error}
          onChange={() => error && setError(false)}
        />
      )}
    </Box>
  )
}

export default OkrTitle
