//  import React, { useEffect,useState } from 'react'
//  import './Products.css';
 
 
//  const Cart = () => {
//   const[CartItem,setCartItems]=useState([]);

//     useEffect(()=>{
//       const items =JSON.parse(localStorage.getItem("cart")) || [];
//       setCartItems(items);
//     },[])


//     const handleRemove = (id) => {
//       const updatedCart = CartItem.filter((item) => item.id !== id);
//       setCartItems(updatedCart);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//     };
    
//     if (CartItem.length === 0){
//       return <h2>Your cart is empty</h2>;
//     }
  
//    return (
//      <>
//        <div className="product-container">
//         {CartItem.map((item)=>(
//           <div key={item.id}  className="product-card">
//             <img src={item.image} alt={item.title} className="product-image" />
//             <h3 className="product-title">{item.title.length>20? item.title.slice(0,10)+"....":item.title}</h3>
//             <p>{item.description.length>20 ? item.description.slice(0,50):item.description}</p>
//             <p className="product-price">Price:${item.price}</p>
//             <button onClick={()=>handleRemove(item.id)}>Remove</button>
//           </div>
//         ))}
//        </div>
//        <h2>TOTAL PRICE:{}</h2>
//      </>
//    );
//  };
 
//  export default Cart;
 


     
// import { useContext, useState } from "react";
// import { CartContext } from "./CartContext";
// import './Cart.css';

// export const Cart = () => {
//   const { cart } = useContext(CartContext);
//   const [qnt, setQnt] = useState(1);

//   return (
//     <div className="container">
//       <h2 className="text-center">Cart Items</h2>
//       <div className="row">
//         {cart.length === 0 ? (
//           <p className="text-center">No items in cart.</p>
//         ) : (
//           cart.map((item, index) => (
//             <div key={index} className="d-flex cart-card">
//               <img src={item.image} alt={item.title} className="cart-image" />
//               <div className="cart-title">{item.title.length>20 ? item.title.slice(0,10):item.title}</div>
//               <div className="cart-description">{item.description.length>50 ? item.description.slice(0,50):item.description}</div>
//               <div className="cart-controls">
//                 <div className="btn-group">
//                   <div className="btn" onClick={() => setQnt(qnt + 1)}>INC</div>
//                   <div className="quantity">{qnt}</div>
//                   <div className="btn" onClick={() => setQnt(qnt > 1 ? qnt - 1 : 1)}>DEC</div>
//                 </div>
//                 <div className="product-price">
//                   Price: ${qnt * item.price}
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };





import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import './Cart.css';

export const Cart = () => {
  const { cart, setcart } = useContext(CartContext);

  // Quantity state per product by id
  const [quantities, setQuantities] = useState(() =>
    Object.fromEntries(cart.map(item => [item.id, 1]))
  );

  const increaseQnt = (id) => {
    setQuantities(prev => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decreaseQnt = (id) => {
    if (quantities[id] <= 1) {
      // Remove from cart if quantity goes to 0
      setcart(cart.filter(item => item.id !== id));
      const updatedQuantities = { ...quantities };
      delete updatedQuantities[id];
      setQuantities(updatedQuantities);
    } else {
      setQuantities(prev => ({ ...prev, [id]: prev[id] - 1 }));
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Cart Items</h2>
      <div className="row">
        {cart.length === 0 ? (
          <p className="text-center">No items in cart.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="d-flex cart-card">
              <img src={item.image} alt={item.title} className="cart-image" />
              <div className="cart-title">
                {item.title.length > 20 ? item.title.slice(0, 10) + '...' : item.title}
              </div>
              <div className="cart-description">
                {item.description.length > 50 ? item.description.slice(0, 50) + '...' : item.description}
              </div>
              <div className="cart-controls">
                <div className="btn-group">
                  <div className="btn" onClick={() => increaseQnt(item.id)}>INC</div>
                  <div className="quantity">{quantities[item.id]}</div>
                  <div className="btn" onClick={() => decreaseQnt(item.id)}>DEC</div>
                </div>
                <div className="product-price">
                   Price: ${quantities[item.id] * item.price}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
