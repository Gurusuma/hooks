 import React from 'react'
 import {Route, Routes} from 'react-router-dom'
import Navbar from './Cards/Navbar'
import Home from './Cards/Home'
import Products from './Cards/Products'
import Cart from './Cards/Cart'


 
 const App = () => {
   return (
     <>
       <Navbar/>
       <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
       </Routes>
     </>
   )
 }
 
 export default App
 