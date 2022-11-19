import React, { useState } from 'react'
import ListItemIcon from '@mui/material/ListItemIcon'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import { fontSize, routes } from '../../constants'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup, Collapse, IconButton, ListItem } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import AddListItem from './AddListItem'

const CollapsableListItem = ({ item, list = [], onUpdate = () => {} }) => {
  const [editMode, setEditMode] = useState(false)

  const visibleOnHover = {
    '& .hidden-button': {
      opacity: 0,
      transition: '.2s ease',
    },
    '&:hover': {
      '.hidden-button': {
        opacity: 1,
      },
    },
  }

  const handleDismissClick = () => {
    setEditMode(false)
  }

  const handleUpdate = (value) => {
    onUpdate(value)
    setEditMode(false)
  }

  if (editMode) {
    return (
      <Collapse in={editMode}>
        <AddListItem
          initialValue={item?.label}
          onBlur={handleDismissClick}
          onCancel={handleDismissClick}
          onAdd={handleUpdate}
          scope='edit'
          list={list}
        />
      </Collapse>
    )
  }

  return (
    <Link to={routes.projectId(item.id)}>
      <ListItemButton
        sx={{
          py: 0.8,
          paddingRight: '0 !important',
          minHeight: 32,
          color: 'rgba(255,255,255,.8)',
          ...visibleOnHover,
        }}
      >
        <ListItemIcon sx={{ color: 'inherit', paddingLeft: 1 }}>
          <LibraryAddCheckIcon />
        </ListItemIcon>
        <ListItemText
          primary={item?.label}
          primaryTypographyProps={{ fontSize, fontWeight: 'medium' }}
        />
        <IconButton
          className='hidden-button'
          edge='end'
          aria-label='edit'
          size='small'
          sx={{ mr: 0.2 }}
          onClick={() => setEditMode(true)}
        >
          <EditIcon fontSize='small' />
        </IconButton>
        <IconButton
          className='hidden-button'
          edge='end'
          aria-label='delete'
          size='small'
          sx={{ mr: 0.5 }}
        >
          <DeleteIcon fontSize='small' />
        </IconButton>
      </ListItemButton>
    </Link>
  )
}

export default CollapsableListItem
