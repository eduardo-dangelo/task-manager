import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import TextEditor from './TextEditor'

const Description = ({ initialValue = '' }) => {
  const [editMode, setEditMode] = useState(false)
  const [value, setValue] = useState(initialValue)
  return (
    <Box sx={{ fontSize: '14px' }}>
      <Typography variant='h6' fontWeight='bold' mt={2} mb={1}>
        DESCRIPTION
      </Typography>
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
