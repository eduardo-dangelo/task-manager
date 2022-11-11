import React from 'react'
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/material'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Box sx={{ display: 'flex', border: '1px solid', height: '100vh' }}>
      <ThemeProvider
        theme={createTheme({
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
        })}
      >
        <Sidebar />
      </ThemeProvider>
    </Box>
  )
}

export default App
