import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <>
      <button onClick={() => navigate('order-summary')}>Place Order</button>
      <button onClick={() => navigate('products/featured')}>Feature Product</button>

    </>
  )
}

export default Home