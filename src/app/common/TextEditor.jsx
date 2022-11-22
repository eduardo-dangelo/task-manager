import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Box } from '@mui/material'

const TextEditor = ({ onBlur, value, onChange }) => {
  return (
    <Box
      sx={{
        '& > div': {
          display: 'flex',
          flexDirection: 'column-reverse',
          borderRadius: '12px',
          backgroundColor: 'transparent !important',
          borderTopLeftRadius: '40px',
        },
        '& > div > div > div': {
          backgroundColor: 'rgba(255,255,255,0.04) !important',
          borderColor: 'transparent !important',
          borderRadius: '6px !important',
        },
        '& .ck-toolbar': {
          backgroundColor: 'gray !important',
          borderColor: 'transparent !important',
        },
      }}
    >
      <CKEditor
        editor={ClassicEditor}
        data={value}
        textarea
        config={{
          height: '500px',
          toolbar: ['bold', 'italic', 'Underline', 'link', 'bulletedList'],
          toolbarLocation: 'bottom',
        }}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor)
        }}
        onChange={(event, editor) => {
          const data = editor.getData()
          console.log({ event, editor, data })
          onChange(data)
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor)
          onBlur()
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor)
        }}
      />
    </Box>
  )
}

export default TextEditor
