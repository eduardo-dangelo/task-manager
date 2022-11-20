import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/material'
import Sidebar from './components/common/Sidebar'
import { routes, theme } from './components/constants'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LogInPage from './components/pages/LogInPage'
import SignUpPage from './components/pages/SignUpPage'
import ForgotPasswordPage from './components/pages/ForgotPasswordPage'
import ProjectPage from './components/pages/ProjectPage'
import ProfilePage from './components/pages/ProfilePage'
import DashboardPage from './components/pages/DashboardPage'

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
