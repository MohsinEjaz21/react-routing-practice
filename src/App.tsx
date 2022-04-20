import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import PageNotFound from './components/404'
import Admin from './components/Admin'
import FeatureProducts from './components/FeatureProducts'
import Home from './components/Home'
import Navbar from './components/Navbar'
import NewProducts from './components/NewProducts'
import OrderSummary from './components/OrderSummary'
import Products from './components/Products'
import UserDetails from './components/UserDetails'
import Users from './components/Users'

const About = lazy(() => import('./components/About'))

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={
          <React.Suspense fallback="Loading...">
            <About />
          </React.Suspense>
        } />
        <Route path="order-summary" element={<OrderSummary />} />
        {/* Notepoint
          - the path property dosnot include the leading slash (/)
          - this is because the path property is used to match the URL
          - the leading slash is added by the router in case of relative paths
          - so if we use the / then full absolute path will be matched i,e /product/featured
        */}
        <Route path="products" element={<Products />} >
          <Route index element={<FeatureProducts />} />
          <Route path="featured" element={<FeatureProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />} >
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </>
  )
}

export default App
