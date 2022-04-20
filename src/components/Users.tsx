import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Users() {
  return (
    <>
      <h1>Users</h1>
      <ul>
        <li><Link to="1">User 1</Link></li>
        <li><Link to="2">User 2</Link></li>
        <li><Link to="3">User 3</Link></li>
      </ul>
      <Outlet />
    </>
  )
}

export default Users