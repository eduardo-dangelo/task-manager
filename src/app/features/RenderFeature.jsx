import React from 'react'
import OkRs from './OKRs'

/* eslint-disable */
const RenderFeature = ({ feature }) => {
  const renderFeature = () => {
    switch (feature.type) {
      case 'okr':
        return <OkRs />
      default:
        return null
    }
  }
  return renderFeature()
}

export default RenderFeature
