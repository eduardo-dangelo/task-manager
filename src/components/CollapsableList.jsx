import React from 'react'
import Box from '@mui/material/Box'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import ListItemIcon from '@mui/material/ListItemIcon'
import People from '@mui/icons-material/People'
import Dns from '@mui/icons-material/Dns'
import PermMedia from '@mui/icons-material/PermMedia'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'

const data = [
  { icon: <People />, label: '2023 Year goals' },
  { icon: <Dns />, label: '2022 Year Goals' },
  { icon: <PermMedia />, label: 'Move House' },
]

const CollapsableList = ({ title = 'Projects', list = data }) => {
  const [open, setOpen] = React.useState(true)

  return (
    <Box
      sx={{
        bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
        pb: open ? 2 : 0,
      }}
    >
      <ListItemButton
        alignItems='flex-start'
        onClick={() => setOpen(!open)}
        sx={{
          px: 3,
          pt: 1.5,
          pb: 1.5,
        }}
      >
        <FolderOpenIcon sx={{ mr: 2 }} />
        <ListItemText
          primary={title}
          primaryTypographyProps={{
            fontSize: 15,
            fontWeight: 'medium',
            lineHeight: '20px',
            mb: '2px',
          }}
          sx={{ my: 0 }}
        />
        <KeyboardArrowDown
          sx={{
            mr: -1,
            transform: open ? 'rotate(-180deg)' : 'rotate(0)',
            transition: '0.2s',
          }}
        />
      </ListItemButton>
      {open &&
        list.map((item) => (
          <ListItemButton key={item.label} sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}>
            <ListItemIcon sx={{ color: 'inherit', paddingLeft: 1 }}>
              <LibraryAddCheckIcon />
            </ListItemIcon>
            <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }} />
          </ListItemButton>
        ))}
    </Box>
  )
}

export default CollapsableList
