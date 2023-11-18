import { useState } from "react"
import CartContext from "./cart-context"

const CartProvider=(props)=>{
   const [items,setItems]= useState([]);
   const addToCartHandler=(newItem)=>{
    const existingItemIndex= items.findIndex((item)=> item.name===newItem.name)
    const existingCartItem=items[existingItemIndex];
    let updatedItem;
    let updatedItems;
       if(existingCartItem){
       updatedItem={
        ...existingCartItem,
        quantity: parseInt( existingCartItem.quantity) + 1
       }
    
       updatedItems=[...items];
       updatedItems[existingItemIndex]=updatedItem
       }
       else{
        updatedItem={...newItem}
        updatedItems=[...items,updatedItem]
       }
       setItems(updatedItems);
   }

   const removeFromCartHandler=()=>{

   }
   const total=items.reduce((curNumber,item)=>{
    return curNumber+(item.quantity*item.price);
  },0)

  const totalItems=items.reduce((curNumber,item)=>{
    return curNumber+(item.quantity);
  },0)

    const cartContext={
     items:items,
     totalAmount:total,
     totalItems:totalItems,
     addToCart:addToCartHandler,
     removeFromCart:removeFromCartHandler
    }
    return <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
     
}

export default CartProvider