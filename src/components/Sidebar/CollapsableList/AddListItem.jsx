import React, { useState } from 'react'
import ListItemIcon from '@mui/material/ListItemIcon'
import { InputAdornment, ListItem, TextField, Tooltip } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import { escapeKeyCode, fontSize, rotate90IconStyle, sideBarMaxWidth } from '../../constants'
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined'

const AddListItem = ({
  onAdd = () => {},
  onCancel = () => {},
  list = [],
  initialValue,
  onBlur = () => {},
  scope = 'create',
}) => {
  const [value, setValue] = useState(initialValue)
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
        pt: 0.8,
        pb: error ? 2 : 0.8,
        pl: 3,
        minHeight: 32,
        color: 'rgba(255,255,255,.8)',
        maxWidth: sideBarMaxWidth,
        alignItems: 'center',
      }}
    >
      <ListItemIcon sx={{ color: 'inherit', paddingLeft: 1, marginRight: '0' }}>
        <LibraryAddCheckOutlinedIcon />
      </ListItemIcon>
      <TextField
        sx={{
          marginLeft: -1,
          '& input': {
            paddingLeft: 1.2,
            py: 0.6,
            fontSize: 14,
          },
        }}
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
    </ListItem>
  )
}

export default AddListItem
