 import React, { useState } from 'react'
 import {Route, Routes} from 'react-router-dom'
import Navbar from './Cards/Navbar'
import Home from './Cards/Home'
import Products from './Cards/Products'
import { Cart } from './Cards/Cart'
import { SingleProduct } from './Cards/SinglePage'
import { CartContext } from './Cards/CartContext'


 
 const App = () => {
  const [cart,setcart]=useState([]);
   return (
     <CartContext.Provider value={{ cart, setcart }}>
       <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/Products/:id" element={<SingleProduct/>}></Route>
       </Routes>
     </CartContext.Provider>
   );
 };
 
 export default App
 