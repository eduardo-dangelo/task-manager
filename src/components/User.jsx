import React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import { Avatar, ListItem } from '@mui/material'
import ListItemText from '@mui/material/ListItemText'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import LogoutIcon from '@mui/icons-material/Logout'
import ArrowRight from '@mui/icons-material/ArrowRight'

const User = () => {
  return (
    <ListItem component='div' disablePadding>
      <ListItemButton
        sx={{
          height: 56,
          paddingY: 5,
          '& svg': {
            color: 'rgba(255,255,255,0.8)',
          },
        }}
      >
        <ListItemIcon>
          <Avatar src='/broken-image.jpg' />
        </ListItemIcon>
        <ListItemText
          primary='Eduardo DAngelo'
          primaryTypographyProps={{
            color: 'primary',
            fontWeight: 'medium',
            variant: 'body2',
          }}
        />
      </ListItemButton>
      <Tooltip title='Log Out'>
        <IconButton
          size='large'
          sx={{
            paddingX: 2,
            '& svg': {
              color: 'rgba(255,255,255,0.8)',
              transition: '0.2s',
              transform: 'translateX(0) rotate(0)',
            },
            '&:hover, &:focus': {
              bgcolor: 'unset',
              '& svg:first-of-type': {
                transform: 'translateX(-4px) rotate(-20deg)',
              },
              '& svg:last-of-type': {
                right: 0,
                opacity: 1,
              },
            },
            '&:after': {
              content: '""',
              position: 'absolute',
              height: '80%',
              display: 'block',
              left: 0,
              width: '1px',
              bgcolor: 'divider',
            },
          }}
        >
          <LogoutIcon />
          <ArrowRight sx={{ position: 'absolute', right: 4, opacity: 0 }} />
        </IconButton>
      </Tooltip>
    </ListItem>
  )
}

export default User
