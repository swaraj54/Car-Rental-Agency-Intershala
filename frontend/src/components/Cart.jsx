import React, { useEffect,useState } from 'react';
import axios from 'axios';
import CartProducts from "./CartProducts.jsx";

import '../components/car/Car.css';
// import './Product.css';


const URL = "http://localhost:2323/cartproducts";

const fetchHandler = async () => {
  return await axios.get(URL).then((res)=>res.data)
}


const Cart = () => {
    const [products, setProducts] = useState();
    useEffect(()=>{
      fetchHandler().then((data)=> setProducts(data.product))
    },[]);


    return (
      <div>
        <div className="well">
             <h1>Cart </h1>
           </div>    
         <div className="ul">
          {products && products.map((product, i)=>(
            <div className="li" key={i}>
              <CartProducts product={product} key={i}/>
            </div>
          ))} 
        </div> 
      </div>
    )
}

export default Cart;