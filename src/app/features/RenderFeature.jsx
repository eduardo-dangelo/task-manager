import React from 'react'
import OkRs from './OKRs'
import CheckList from './CheckList'
import Sprints from './Sprints'
import Notes from './Notes'
import Tasks from './Tasks'

/* eslint-disable */
const RenderFeature = ({ feature }) => {
  const renderFeature = () => {
    switch (feature.type) {
      case 'okr':
        return <OkRs />
      case 'checklist':
        return <CheckList />
      case 'sprint':
        return <Sprints />
      case 'notes':
        return <Notes />
      case 'tasks':
        return <Tasks />
      default:
        return null
    }
  }
  return renderFeature()
}

export default RenderFeature
