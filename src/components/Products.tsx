import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <>
      <input type='search' placeholder="Search Products" />
      <nav>
        <Link to="featured" >Feature Product</Link>
        <Link to="new" >New Product</Link>
        {/* Route to new can be done using absolute path like below */}
        {/* <Link to="/products/new" >New Product</Link> */}
      </nav>
      <Outlet />
    </>
  )
}

export default Products