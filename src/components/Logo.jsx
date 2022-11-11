import React from 'react'
import ListItemIcon from '@mui/material/ListItemIcon'
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'

const Logo = () => {
  return (
    <ListItemButton component='a' href='#customized-list'>
      <ListItemIcon sx={{ fontSize: 20 }}>
        <AssignmentTurnedInRoundedIcon color='secondary' fontSize='large' />️
      </ListItemIcon>
      <ListItemText
        sx={{ my: 0 }}
        primary='TASK MANAGER'
        primaryTypographyProps={{
          fontSize: 20,
          fontWeight: 'medium',
          letterSpacing: 0,
        }}
      />
    </ListItemButton>
  )
}

export default Logo
