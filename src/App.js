import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Product from './pages/Product';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Navigation from "./components/Navigation";
import { CartContext } from './CartContext';
import { useEffect, useState } from 'react';
import { getCart, storeCart } from './helper';
function App() {
  const [ cart, setCart ] = useState({});
// Fetch cart from local storage
useEffect(() => {
  getCart().then(cart => {
    setCart(JSON.parse(cart));
  });
}, []);

useEffect(() => {
    storeCart(JSON.stringify(cart));
}, [cart]);

  return (
    <>
      <Router>
      <CartContext.Provider value={{ cart, setCart }}>
          < Navigation />
      <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/Product" element={<Product/>} />  
          <Route path="/Product/:_id" element={<SingleProduct/>} />  
          <Route path="/Cart" element={<Cart/>} />  
        </Routes>
        </CartContext.Provider>
      </Router>
    </>
  );
}

export default App;
