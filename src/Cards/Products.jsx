import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './Products.css';
import { Link } from "react-router-dom";
import { CartContext } from './CartContext';

const Products = () => {
  const [data, setData] = useState([]);
  const {cart,setcart} = useContext(CartContext);

  useEffect(() => {
    async function fetchdata() {
      let { data } = await axios.get('https://fakestoreapi.com/products');
      setData(data);
      console.log(data);
    }
    fetchdata();
  }, []);

  const isInCart = (id) => {
    return cart.some(item => item.id === id);
  };

  
  return (
    <div className="product-container">
      {data.map((item) => (
        <div className="product-card" key={item.id}>
          <img src={item.image} alt={item.title} className="product-image" />
          <h3 className="product-title">
            Title: {item.title.length > 20 ? item.title.slice(0, 20) + '...' : item.title}
          </h3>
          <p className="product-price">Price: ${item.price}</p>
          <p className="product-rating">Rating: {item.rating?.rate ?? 'N/A'}</p>
          <div className='Product_button'>
<button
              onClick={() => setcart([...cart, item])}
              disabled={isInCart(item.id)}
            >
              {isInCart(item.id) ? 'Added' : 'Add to cart'}
            </button>  <Link to={`/Products/${item.id}`}><button>Details</button></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
