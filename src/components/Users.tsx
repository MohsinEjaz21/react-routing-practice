import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

function Users() {
  const [searchParams, setSearchParams] = useSearchParams()
  const isActiveUsers = searchParams.get('filter') === 'active'
  return (
    <>
      <h1>Users</h1>
      <ul>
        <li><Link to="1">User 1</Link></li>
        <li><Link to="2">User 2</Link></li>
        <li><Link to="3">User 3</Link></li>
      </ul>
      <div>
        <button onClick={() => setSearchParams({ filter: 'active' })} >Active Users</button>
        <button onClick={() => setSearchParams({})} >Reset Filters</button>
      </div>
      <h2>{isActiveUsers ? 'Show Active Users' : 'showing All users '}</h2>
      <Outlet />
    </>
  )
}

export default Users