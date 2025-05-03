 import React, { useState } from 'react'
 
 const Products = () => {
    const [data, setData]=useState([]);
    useEffect(()=>{
        async function fetchdata(){
            let {data}=await axios.get("https://fakestoreapi.com/products")
            setData(data);
        }
        fetchdata();
    },[])
   return (
     <>
       
     </>
   )
 }
 
 export default Products
 