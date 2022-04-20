import { Route, Routes } from 'react-router-dom'
import './App.css'
import { About, Home, Navbar } from './components'
import PageNotFound from './components/404'
import Admin from './components/Admin'
import FeatureProducts from './components/FeatureProducts'
import NewProducts from './components/NewProducts'
import OrderSummary from './components/OrderSummary'
import Products from './components/Products'
import UserDetails from './components/UserDetails'
import Users from './components/Users'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
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
