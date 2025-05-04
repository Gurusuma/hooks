import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './SinglePage.css';

export const SingleProduct = () => {
  const [Product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchdata() {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(data);
    }
    fetchdata();
  }, []);

  return (
    <div className="single-product-container">
      <div className="single-product-image-box">
        <img
          src={Product.image}
          alt={Product.title}
          className="single-product-image"
        />
      </div>

      <div className="single-product-details">
        <h2 className="product-title">{Product.title}</h2>
        <p className="product-description">{Product.description}</p>
        <h4 className="product-price">Price: ${Product.price}</h4>
        <p className="product-category">Category: {Product.category}</p>
        <button className="add-to-cart-btn">Add to cart</button>
      </div>
    </div>
  );
};
