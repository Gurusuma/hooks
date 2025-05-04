 import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


 export const SingleProduct = () =>{
    const [Product,setProduct]=useState({});
    const {id} =useParams();


 useEffect(()=>{
    async function fetchdata(){
        const{data}=await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(data);
    }
    fetchdata();
 },[]);
  return(
    <>
    <div>
    <div>
    <img src={product.image}  alt={product.title} style={{ maxWidth: "100%", maxHeight: "400px", objectFit: "contain" }}/>
    </div>
    <div>
        <h2>{product.title}</h2>
        <p>{Product.description}</p>
        <h4>{Product.price}</h4>
        <p>{Product.category}</p>
        <button>Add to cart</button>
    </div>
    </div>
    </>
  );
};