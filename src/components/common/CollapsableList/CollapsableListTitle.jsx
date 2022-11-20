import React from 'react'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import ListItemText from '@mui/material/ListItemText'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import ListItemButton from '@mui/material/ListItemButton'
import FolderIcon from '@mui/icons-material/Folder'

const CollapsableListTitle = ({ title = '', open, ...props }) => {
  return (
    <ListItemButton alignItems='flex-start' sx={{ px: 3, py: 1.5 }} {...props}>
      {open ? <FolderOpenIcon sx={{ mr: 2 }} /> : <FolderIcon sx={{ mr: 2 }} />}
      <ListItemText
        primary={title}
        primaryTypographyProps={{
          fontSize: 15,
          fontWeight: 'medium',
          lineHeight: '20px',
          mb: '2px',
        }}
        sx={{ my: 0 }}
      />
      <KeyboardArrowDown
        sx={{
          mr: -1,
          transform: open ? 'rotate(-180deg)' : 'rotate(0)',
          transition: '0.2s',
        }}
      />
    </ListItemButton>
  )
}

export default CollapsableListTitle
