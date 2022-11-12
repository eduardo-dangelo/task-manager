import React, { useState } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { Collapse, ListItem } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { TransitionGroup } from 'react-transition-group'
import { rotate90IconStyle } from '../../constants'
import AddListItem from './AddListItem'
import CollapsableListItem from './CollapsableListItem'
import CollapsableListTitle from './CollapsableListTitle'

const data = [{ label: '2023 Year goals' }, { label: '2022 Year Goals' }, { label: 'Move House' }]

const CollapsableList = ({ title = 'Projects', list = data }) => {
  const [collapsableList, setCollapsableList] = useState(list)
  const [open, setOpen] = useState(true)
  const [isAdding, setIsAdding] = useState(false)

  const handleToggleList = () => {
    setOpen(!open)
    open && setIsAdding(false)
  }

  const handleAddIconClick = () => {
    setIsAdding(true)
  }

  const handleAddItem = (item) => {
    setCollapsableList([...collapsableList, { label: item }])
    !open && setOpen(true)
    setIsAdding(false)
  }

  const handleCancelAddItem = () => {
    setIsAdding(false)
  }

  return (
    <Box
      sx={{
        bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
        pb: open ? 2 : 0,
      }}
    >
      <ListItem component='div' disablePadding>
        <CollapsableListTitle onClick={handleToggleList} title={title} open={open} />
        <Tooltip title='New Project'>
          <IconButton onClick={handleAddIconClick} size='large' sx={rotate90IconStyle}>
            <AddCircleOutlineIcon />
          </IconButton>
        </Tooltip>
      </ListItem>
      <TransitionGroup>
        {open &&
          collapsableList.map((item, index) => (
            <Collapse key={index}>
              <CollapsableListItem item={item} />
            </Collapse>
          ))}
        {isAdding && (
          <Collapse>
            <AddListItem onAdd={handleAddItem} onCancel={handleCancelAddItem} list={collapsableList} />
          </Collapse>
        )}
      </TransitionGroup>
    </Box>
  )
}

export default CollapsableList
