import React from 'react'
import ListItemIcon from '@mui/material/ListItemIcon'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import { fontSize, routes } from '../../constants'
import { Link } from 'react-router-dom'

const CollapsableListItem = ({ item }) => {
  return (
    <Link to={routes.projectId(item.id)}>
      <ListItemButton sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}>
        <ListItemIcon sx={{ color: 'inherit', paddingLeft: 1 }}>
          <LibraryAddCheckIcon />
        </ListItemIcon>
        <ListItemText
          primary={item?.label}
          primaryTypographyProps={{ fontSize, fontWeight: 'medium' }}
        />
      </ListItemButton>
    </Link>
  )
}

export default CollapsableListItem
