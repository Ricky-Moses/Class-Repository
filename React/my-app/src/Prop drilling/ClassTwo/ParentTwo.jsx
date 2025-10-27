import React from 'react'
import GrandChildTwo from './GrandChildTwo'

const ParentTwo = ({drill}) => {
    console.info(drill)
  return (
    <div>ParentTwo
        <GrandChildTwo drill={drill} />
    </div>
  )
}

export default ParentTwo