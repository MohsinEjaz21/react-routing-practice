import { Route, Routes } from 'react-router-dom'
import './App.css'
import { About, Home, Navbar } from './components'
import PageNotFound from './components/404'
import FeatureProducts from './components/FeatureProducts'
import NewProducts from './components/NewProducts'
import OrderSummary from './components/OrderSummary'
import Products from './components/Products'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />} >
          <Route path="featured" element={<FeatureProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
