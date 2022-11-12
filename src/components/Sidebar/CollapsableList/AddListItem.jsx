import React, { useState } from 'react'
import ListItemIcon from '@mui/material/ListItemIcon'
import { InputAdornment, ListItem, TextField, Tooltip } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import { escapeKeyCode, fontSize, rotate90IconStyle, sideBarMaxWidth } from '../../constants'
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined'

const AddListItem = ({ onAdd = () => {}, onCancel = () => {}, list = [] }) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const submit = (fieldValue) => {
    let errorMessage = ''

    if (!fieldValue) errorMessage = 'Field cannot be empty.'
    if (fieldValue && list.find(({ label }) => label === fieldValue)) {
      errorMessage = 'Name already exist.'
    }

    errorMessage ? setError(errorMessage) : onAdd(fieldValue)
  }

  const handleChange = (e) => {
    error && setError(false)
    setValue(e.target.value)
  }

  const handleAddItem = () => {
    submit(value)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      submit(value)
    }

    if (e.keyCode === escapeKeyCode) {
      onCancel()
    }
  }

  return (
    <ListItem
      sx={{
        fontSize,
        py: 0,
        pl: 3,
        minHeight: 32,
        color: 'rgba(255,255,255,.8)',
        maxWidth: sideBarMaxWidth,
        alignItems: 'baseline',
      }}
    >
      <ListItemIcon sx={{ color: 'inherit', paddingLeft: 1 }}>
        <LibraryAddCheckOutlinedIcon />
      </ListItemIcon>
      <TextField
        error={!!error}
        autoFocus
        size='small'
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        helperText={error}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <Tooltip title='Add'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleAddItem}
                  edge='end'
                  sx={rotate90IconStyle}
                >
                  <AddIcon />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />
    </ListItem>
  )
}

export default AddListItem
