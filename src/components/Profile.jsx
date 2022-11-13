import React from 'react'
import PageLayout from './common/PageLayout'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import { Avatar, Badge, IconButton, Switch, Typography } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import styled from '@emotion/styled'

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      // eslint-disable-next-line
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}))

const Profile = () => {
  return (
    <PageLayout title='Profile'>
      <Box component='form' noValidate onSubmit={() => {}}>
        <Box mb={5}>
          <Typography mb={2}>Profile Picture</Typography>

          <Badge
            overlap='circular'
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              <Avatar sx={{ width: 30, height: 30 }}>
                <IconButton color='primary' aria-label='upload picture' component='label'>
                  <input hidden accept='image/*' type='file' />
                  <PhotoCamera fontSize='small' />
                </IconButton>
              </Avatar>
            }
          >
            <Avatar
              alt='Remy Sharp'
              src='/static/images/avatar/1.jpg'
              sx={{ width: 80, height: 80 }}
            />
          </Badge>
        </Box>

        <Typography mb={2}>Account Info</Typography>
        <Grid container spacing={2} xs={12} sm={6} mb={5}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete='given-name'
              name='firstName'
              required
              fullWidth
              id='firstName'
              label='First Name'
              autoFocus
              size='small'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id='lastName'
              label='Last Name'
              name='lastName'
              autoComplete='family-name'
              size='small'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              size='small'
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value='allowExtraEmails' color='primary' />}
              label='Marketing preferences.'
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
              label='Theme | Dark'
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' sx={{ mb: 2 }}>
              Save
            </Button>
          </Grid>
        </Grid>

        <Typography mb={2}>Update Password</Typography>
        <Grid container spacing={2} xs={12} sm={6}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name='password'
              label='Current Password'
              type='password'
              id='password'
              autoComplete='new-password'
              size='small'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name='password'
              label='New Password'
              type='password'
              id='password'
              autoComplete='new-password'
              size='small'
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' sx={{ mb: 2 }}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </PageLayout>
  )
}

export default Profile
