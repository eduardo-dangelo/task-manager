import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton } from '@mui/material'

const TrashButton = ({ onDelete, ...props }) => {
  return (
    <IconButton
      {...props}
      edge='end'
      aria-label='delete'
      size='small'
      sx={{ mr: 0.5, ...props.sx }}
      onClick={onDelete}
    >
      <DeleteIcon fontSize='small' />
    </IconButton>
  )
}

export default TrashButton
