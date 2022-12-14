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
import uuid from 'react-uuid'

const data = [
  { id: uuid(), label: '2023 Year goals' },
  { id: uuid(), label: '2022 Year Goals' },
  { id: uuid(), label: 'Move House' },
]

const CollapsableList = ({ title = 'Projects', list = data }) => {
  const [collapsableList, setCollapsableList] = useState(list)
  const [open, setOpen] = useState(true)
  const [isAdding, setIsAdding] = useState(false)
  const [activeItem, setActiveItem] = useState('')

  const handleToggleList = () => {
    setOpen(!open)
    open && setIsAdding(false)
  }

  const handleAddIconClick = () => {
    setIsAdding(true)
  }

  const handleAddItem = (item) => {
    setCollapsableList([...collapsableList, { label: item, id: uuid() }])
    !open && setOpen(true)
    setIsAdding(false)
  }

  const handleCancelAddItem = () => {
    setIsAdding(false)
  }

  const handleUpdateItem = (value, index) => {
    const listClone = JSON.parse(JSON.stringify(collapsableList))
    listClone[index].label = value
    setCollapsableList(listClone)
  }

  const handleDeleteItem = (index) => {
    const listClone = JSON.parse(JSON.stringify(collapsableList))
    const newList = listClone.filter((item, i) => i !== index && item)
    setCollapsableList(newList)
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
            <Collapse key={item.id}>
              <CollapsableListItem
                item={item}
                list={collapsableList}
                onUpdate={(value) => handleUpdateItem(value, index)}
                onDelete={() => handleDeleteItem(index)}
                onClick={() => setActiveItem(item.id)}
                selected={activeItem === item.id}
              />
            </Collapse>
          ))}
        {isAdding && (
          <Collapse>
            <AddListItem
              onAdd={handleAddItem}
              onCancel={handleCancelAddItem}
              list={collapsableList}
            />
          </Collapse>
        )}
      </TransitionGroup>
    </Box>
  )
}

export default CollapsableList
