import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/material'
import Sidebar from './components/Sidebar/Sidebar'
import { routes, theme } from './components/constants'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LogIn from './components/auth/LogIn'
import SignUp from './components/auth/SignUp'
import ForgotPassword from './components/auth/ForgotPassword'
import ProjectPage from './components/ProjectPage'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path={routes.dashboard} element={<Dashboard />} />
            <Route path={routes.profile} element={<Profile />} />
            <Route path={routes.login} element={<LogIn />} />
            <Route path={routes.signUp} element={<SignUp />} />
            <Route path={routes.forgotPassword} element={<ForgotPassword />} />
            <Route path={routes.project} element={<ProjectPage />} />
          </Routes>
        </ThemeProvider>
      </Box>
    </Router>
  )
}

export default App
