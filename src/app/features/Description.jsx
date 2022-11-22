import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import TextEditor from '../common/TextEditor'

const Description = ({ initialValue = '' }) => {
  const [editMode, setEditMode] = useState(false)
  const [value, setValue] = useState(initialValue)
  return (
    <Box sx={{ fontSize: '14px' }}>
      {editMode && (
        <TextEditor onBlur={() => setEditMode(false)} value={value} onChange={setValue} />
      )}
      {!editMode && (
        <div
          onClick={() => setEditMode(true)}
          data-test='body'
          dangerouslySetInnerHTML={{
            __html: value,
          }}
        />
      )}
    </Box>
  )
}

export default Description
