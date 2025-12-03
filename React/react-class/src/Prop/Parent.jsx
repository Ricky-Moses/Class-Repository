import React from 'react'
import GrandChild from './GrandChild'

const Parent = ({user}) => {
  return (
    <>
        <GrandChild user={user} />
    </>
  )
}

export default Parent