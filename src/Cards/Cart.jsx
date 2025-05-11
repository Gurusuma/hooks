 import React, { useEffect,useState } from 'react'
 import './Products.css';
 
 const Cart = () => {
  const[CartItem,setCartItems]=useState([]);

    useEffect(()=>{
      const items =JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(items);
    },[])


    const handleRemove = (id) => {
      const updatedCart = CartItem.filter((item) => item.id !== id);
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    };
    
    if (CartItem.length === 0){
      return <h2>Your cart is empty</h2>;
    }
  
   return (
     <>
       <div className="product-container">
        {CartItem.map((item)=>(
          <div key={item.id}  className="product-card">
            <img src={item.image} alt={item.title} className="product-image" />
            <h3 className="product-title">{item.title.length>20? item.title.slice(0,10)+"....":item.title}</h3>
            <p>{item.description.length>20 ? item.description.slice(0,50):item.description}</p>
            <p className="product-price">Price:${item.price}</p>
            <button onClick={()=>handleRemove(item.id)}>Remove</button>
          </div>
        ))}
       </div>
       <h2>TOTAL PRICE:{}</h2>
     </>
   );
 };
 
 export default Cart;
 