import { Route, Routes } from 'react-router-dom'
import './App.css'
import { About, Home, Navbar } from './components'
import OrderSummary from './components/OrderSummary'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>
    </>
  )
}

export default App
