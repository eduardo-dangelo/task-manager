import React, { useState } from 'react'
import { InputAdornment, TextField, Tooltip } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { escapeKeyCode, rotate90IconStyle } from '../constants'
import AddIcon from '@mui/icons-material/Add'

const AddItem = ({
  initialValue,
  scope,
  onCancel,
  onBlur,
  error,
  onSubmit,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState(initialValue)

  const handleAddItem = () => {
    onSubmit(value)
  }

  const handleChange = (e) => {
    onChange(e.target.value)
    setValue(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit(value)
    }

    if (e.keyCode === escapeKeyCode) {
      onCancel()
    }
  }

  return (
    <TextField
      {...props}
      error={!!error}
      autoFocus
      size='small'
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      helperText={error}
      FormHelperTextProps={{
        sx: {
          fontSize: 10,
          mb: -1,
          position: 'absolute',
          bottom: -10,
        },
      }}
      InputProps={{
        onBlur,
        endAdornment: (
          <InputAdornment position='end'>
            <Tooltip title={scope === 'create' ? 'Add' : 'Update'}>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleAddItem}
                edge='end'
                sx={rotate90IconStyle}
                size='small'
              >
                <AddIcon />
              </IconButton>
            </Tooltip>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default AddItem
