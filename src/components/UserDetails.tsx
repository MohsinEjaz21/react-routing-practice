import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
  const { userId } = useParams()
  return (
    <>
      <h1>UserDetails of {userId}</h1>
    </>
  )
}

export default UserDetails