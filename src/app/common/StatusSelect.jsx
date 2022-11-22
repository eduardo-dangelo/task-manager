import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Chip } from '@mui/material'

const statuses = ['Inactive', 'in progress', 'blocked', 'completed']

const StatusSelect = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [statusValue, setStatusValue] = React.useState('active')
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (s) => {
    setAnchorEl(null)
    setStatusValue(s)
  }

  const colors = {
    'Inactive': '#aaaaaa',
    'in progress': '#358eb4',
    'blocked': '#af2828',
    'completed': '#40b940',
  }

  return (
    <div>
      <Chip
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        label={statusValue}
        size='small'
        sx={{ ml: 2, background: colors[statusValue] }}
      />
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {statuses.map((status, key) => (
          <MenuItem key={key} onClick={() => handleClose(status)}>
            {status}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default StatusSelect
