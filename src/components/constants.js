const rotate90IconStyle = {
  '& svg': {
    color: 'rgba(255,255,255,0.8)',
    transition: '0.2s',
    transform: 'translateX(0) rotate(0)',
  },
  '&:hover, &:focus': {
    '& svg:first-of-type': {
      transform: 'rotate(-90deg)',
    },
    '& svg:last-of-type': {
      right: 0,
      opacity: 1,
    },
  },
}

const fontSize = 14
const sideBarMaxWidth = 286
const escapeKeyCode = 27

export { rotate90IconStyle, fontSize, sideBarMaxWidth, escapeKeyCode }
