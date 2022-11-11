import React, { useState } from 'react'
import ListItemIcon from '@mui/material/ListItemIcon'
import { InputAdornment, ListItem, TextField, Tooltip } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import { fontSize, rotate90IconStyle } from './constants'
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined'

const AddListItem = ({ onAdd = () => {} }) => {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleAddItem = () => {
    onAdd(value)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onAdd(value)
    }
  }

  return (
    <ListItem sx={{ fontSize, py: 0, pl: 3, minHeight: 32, color: 'rgba(255,255,255,.8)' }}>
      <ListItemIcon sx={{ color: 'inherit', paddingLeft: 1 }}>
        <LibraryAddCheckOutlinedIcon />
      </ListItemIcon>
      <TextField
        sx={{
          fontSize,
        }}
        autoFocus
        size='small'
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
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
