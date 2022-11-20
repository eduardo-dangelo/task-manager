import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/material'
import Sidebar from './app/common/Sidebar'
import { routes, theme } from './app/constants'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LogInPage from './app/pages/LogInPage'
import SignUpPage from './app/pages/SignUpPage'
import ForgotPasswordPage from './app/pages/ForgotPasswordPage'
import ProjectPage from './app/pages/ProjectPage'
import ProfilePage from './app/pages/ProfilePage'
import DashboardPage from './app/pages/DashboardPage'

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path={routes.dashboard} element={<DashboardPage />} />
            <Route path={routes.profile} element={<ProfilePage />} />
            <Route path={routes.login} element={<LogInPage />} />
            <Route path={routes.signUp} element={<SignUpPage />} />
            <Route path={routes.forgotPassword} element={<ForgotPasswordPage />} />
            <Route path={routes.project} element={<ProjectPage />} />
          </Routes>
        </ThemeProvider>
      </Box>
    </Router>
  )
}

export default App
