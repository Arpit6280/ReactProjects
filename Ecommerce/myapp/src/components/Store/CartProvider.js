import { useState } from "react"
import CartContext from "./cart-context"

const CartProvider=(props)=>{
   const [items,setItems]= useState([]);


   const addToCartHandler=(newItem)=>{
    console.log(newItem.name);
    const existingItemIndex= items.findIndex((item)=> item.title===newItem.title)
    const existingCartItem=items[existingItemIndex];
    console.log(existingCartItem,existingItemIndex);
    let updatedItem;
    let updatedItems;
       if(existingCartItem){
        console.log('old');
       updatedItem={
        ...existingCartItem,
        quantity: parseInt( existingCartItem.quantity) + 1
       }
    
       updatedItems=[...items];
       updatedItems[existingItemIndex]=updatedItem
       }
       else{
        console.log('new');
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