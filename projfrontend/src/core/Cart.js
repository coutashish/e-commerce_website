import React, { useState, useEffect } from 'react'
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from './Card';
import { loadCart } from './helper/cartHelper';





const Cart = ()=>{

    const [reload, setReload] = useState(false)
    const [products, setProducts] = useState([]);


    useEffect(
        ()=>{
            setProducts(loadCart())
        },[reload]
    );


    const loadAllProducts = ()=>{
        return (
            <div >
                <h2>Your Products</h2>
                <div className="m-5">
                {products.map((product,index)=>(
                    <Card 
                    key={index}
                    product = {product}
                    addtoCart = {false}
                    removeFromCart = {true}
                    setReload = {setReload}
                    reload = {reload}
                    />
                ))}
            </div>
            </div>
        )
    }

    const loadCheckout = ()=>{
        return (
            <div>
                <h2> Checkout</h2>
            </div>
        )
    }
   

    return (
        <Base title="Cart Page"
            description="">
            <div className="row ">
              <div className="offset-1 text-center col-4 ">
                    {loadAllProducts()}
              </div>
              <div className="offset-1 col-3">
                  {loadCheckout()}
              </div>
            </div>
        </Base>
    );
}

export default Cart;