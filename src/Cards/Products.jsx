import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css';
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      let { data } = await axios.get('https://fakestoreapi.com/products');
      setData(data);
      console.log(data);
    }
    fetchdata();
  }, []);

  const handleAddToCart = (item) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const exists = cart.find((i)=>i.id === item.id);
  if(!exists){
    cart.push({...item,quantity:1});
    localStorage.setItem("cart",JSON.stringify(cart));
  }else{
    alert("item already exist in the cart")
  }
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
            <button onClick={()=>handleAddToCart(item)}>Add to cart</button>
            <Link to={`/Products/${item.id}`}><button>Details</button></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
