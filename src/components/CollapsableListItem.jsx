import React from 'react'
import ListItemIcon from '@mui/material/ListItemIcon'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import { fontSize } from './constants'

const CollapsableListItem = ({ item }) => {
  return (
    <ListItemButton sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}>
      <ListItemIcon sx={{ color: 'inherit', paddingLeft: 1 }}>
        <LibraryAddCheckIcon />
      </ListItemIcon>
      <ListItemText primary={item?.label} primaryTypographyProps={{ fontSize, fontWeight: 'medium' }} />
    </ListItemButton>
  )
}

export default CollapsableListItem
