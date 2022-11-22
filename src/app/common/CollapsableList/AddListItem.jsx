import React, { useState } from 'react'
import ListItemIcon from '@mui/material/ListItemIcon'
import { ListItem } from '@mui/material'
import { fontSize, sideBarMaxWidth } from '../../constants'
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined'
import AddItem from '../AddItem'

const AddListItem = ({
  onAdd = () => {},
  onCancel = () => {},
  list = [],
  initialValue,
  onBlur = () => {},
  scope = 'create',
  selected = false,
}) => {
  const [error, setError] = useState('')

  const submit = (fieldValue) => {
    let errorMessage = ''

    if (!fieldValue) errorMessage = 'Field cannot be empty.'
    if (fieldValue && list.find(({ label }) => label === fieldValue)) {
      errorMessage = 'Name already exist.'
    }

    errorMessage ? setError(errorMessage) : onAdd(fieldValue)
  }

  const PADDING_Y = 0.4
  return (
    <ListItem
      sx={{
        fontSize,
        pt: PADDING_Y,
        pb: error ? 2 : PADDING_Y,
        pl: 3,
        minHeight: 32,
        color: 'rgba(255,255,255,.8)',
        maxWidth: sideBarMaxWidth,
        alignItems: 'center',
      }}
      selected={selected}
    >
      <ListItemIcon sx={{ color: 'inherit', paddingLeft: 1, marginRight: '0' }}>
        <LibraryAddCheckOutlinedIcon />
      </ListItemIcon>
      <AddItem
        initialValue={initialValue}
        onBlur={onBlur}
        onCancel={onCancel}
        onChange={() => error && setError(false)}
        onSubmit={submit}
        error={error}
        sx={{
          marginLeft: -1,
          '& input': {
            paddingLeft: 1.2,
            py: 1,
            fontSize: 14,
          },
        }}
      />
    </ListItem>
  )
}

export default AddListItem
