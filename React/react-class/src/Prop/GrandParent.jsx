import React from 'react'
import Parent from './Parent'

const GrandParent = () => {
    const name = "Mani Malai"
  return (
    <>
        <Parent user={name} />
    </>
  )
}

export default GrandParent