import React from 'react'
import {
  Box,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'

const TaskBuilder = () => {
  const [checked, setChecked] = React.useState([0])

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  return (
    <Box>
      <Typography variant='h6' fontWeight='bold' mt={2} mb={1}>
        TASKS
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-label-${value}`

          return (
            <ListItem key={value} disablePadding>
              <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge='start'
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}

export default TaskBuilder
