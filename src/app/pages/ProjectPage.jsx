import React from 'react'
import PageLayout from './PageLayout'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import OkRs from '../features/OKRs'

const ProjectPage = () => {
  const [value, setValue] = React.useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <PageLayout title='Projects / 2023 Year Goals'>
      <Typography variant='h4'>2023 Year Goals</Typography>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label='lab API tabs example'>
              <Tab label='Overview' value='1' />
              <Tab label='Stats' value='2' />
              <Tab label='Config' value='3' />
            </TabList>
          </Box>
          <TabPanel value='1'>
            <OkRs />
          </TabPanel>
          <TabPanel value='2'>Item Two</TabPanel>
          <TabPanel value='3'>Item Three</TabPanel>
        </TabContext>
      </Box>
    </PageLayout>
  )
}

export default ProjectPage