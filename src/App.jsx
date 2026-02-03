import React from 'react'
import { ShoppingBag } from 'lucide-react'
import Navbar from './components/Navbar'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Team from './pages/Team'
import Footer from './components/Footer'
import Checkout from './pages/Checkout'

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/team/:teamId" element={<Team />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
    
  )
}

export default App