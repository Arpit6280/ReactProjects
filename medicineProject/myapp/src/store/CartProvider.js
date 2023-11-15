import { useState } from "react";
import CartContext from "./cart-context"

const CartProvider= props=>{
    const[items,setItems]=useState([])
 
const addItemToCartHandler=(newItems)=>{
    console.log(newItems);
   const existingItemIndex=items.findIndex((item)=> item.name===newItems.name)
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
    updatedItem={...newItems}
    updatedItems=[...items,updatedItem]
   }
   setItems(updatedItems);
}


const removeItemFromCartHAndler=(id)=>{
    const existingItemIndex=items.findIndex((item)=> item.id===id)
    const existingCartItem=items[existingItemIndex];
    let updatedItem;
    let updatedItems;

    updatedItem={
     ...existingCartItem,
     amount:existingCartItem.amount -1
    }
    updatedItems=[...items];
    updatedItems[existingItemIndex]=updatedItem
    let updatedItemNew=  updatedItems.filter((item)=>{
      if(item.amount!==0)
      return item;
   })
   setItems(updatedItemNew);

}

const total=items.reduce((curNumber,item)=>{
    return curNumber+((item.quantity)*item.price);
  },0)

const cartContext={
    items:items,
    totalAmount:total,
    addItem:addItemToCartHandler,
    removeItem:removeItemFromCartHAndler
}

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

}

export default CartProvider;