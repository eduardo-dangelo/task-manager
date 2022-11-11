import * as React from 'react'
import { styled } from '@mui/material/styles'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import Paper from '@mui/material/Paper'
import Logo from './Logo'
import User from './User'
import CollapsableList from './CollapsableList'

const FireNav = styled(List)({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
})

const Sidebar = () => {
  const [open, setOpen] = React.useState(true)
  return (
    <Paper elevation={0} sx={{ maxWidth: 286, borderRadius: 0 }}>
      <FireNav component='nav' disablePadding>
        <Logo />
        <Divider />
        <User />
        <Divider />
        <CollapsableList />
      </FireNav>
    </Paper>
  )
}

export default Sidebar
