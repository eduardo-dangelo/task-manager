import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontSize: 14,
  },
  components: {
    MuiListItemButton: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: { main: 'rgb(102, 157, 246)' },
    secondary: { main: 'rgb(246,200,102)' },
    background: { paper: 'rgb(5, 30, 52)' },
  },
})

const rotate90IconStyle = {
  '& svg': {
    color: 'rgba(255,255,255,0.8)',
    transition: '0.2s',
    transform: 'translateX(0) rotate(0)',
  },
  '&:hover, &:focus': {
    '& svg:first-of-type': {
      transform: 'rotate(-90deg)',
    },
    '& svg:last-of-type': {
      right: 0,
      opacity: 1,
    },
  },
}

const fontSize = 14
const sideBarMaxWidth = 280
const escapeKeyCode = 27

const routes = {
  dashboard: '/',
  profile: '/profile',
  login: '/login',
  signUp: '/sign-up',
  forgotPassword: '/forgot-password',
  project: '/project/:id',
}

export { rotate90IconStyle, fontSize, sideBarMaxWidth, escapeKeyCode, theme, routes }
