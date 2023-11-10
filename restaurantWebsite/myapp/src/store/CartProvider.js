import { useState } from "react";
import CartContext from "./cart-context"

const CartProvider= props=>{
    const[items,setItems]=useState([])
 
const addItemToCartHandler=(newItems)=>{
   setItems((prevState)=>{
    return [...prevState, newItems]
   })
}
const removeItemFromCartHAndler=(id)=>{

}

const cartContext={
    items:items,
    totalAmount:0,
    addItem:addItemToCartHandler,
    removeItem:removeItemFromCartHAndler
}

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

}

export default CartProvider;