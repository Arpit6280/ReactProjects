import { useContext, useEffect, useState } from "react"
import CartContext from "./cart-context"
import AuthContext from "./auth-context";
import axios from "axios";


const CartProvider=(props)=>{
  const authCtx=useContext(AuthContext);
   let email=authCtx.email;
   if(email!==null){
  let pos= email.search('@');
  email=email.slice(0,pos)
   }
   const [items,setItems]= useState([]);

   const addToCartHandler=async (product)=>{
    try{
      const updatedItemsArray = [...items];
      const existingItemIndex = updatedItemsArray.findIndex(
        (existingItem) => existingItem.title === product.title
      );
      if (existingItemIndex !== -1) {
        updatedItemsArray[existingItemIndex].quantity += Number(
          product.quantity
        );
     
        try {
          const itemIdToUpdate = updatedItemsArray[existingItemIndex]._id; 
          const updatedItem = {
            title: product.title,
            imageUrl: product.imageUrl,
            price: product.price,
            quantity: updatedItemsArray[existingItemIndex].quantity,
          };
          await axios.put(
            `https://crudcrud.com/api/41ed7a02c44041279257762a25983f2e/${email}/${itemIdToUpdate}`,
            updatedItem
          );
          fetchCartData();
        }catch (error) {
          console.error("Error updating item:", error);
        }
    }else {
      const response = await fetch(
        `https://crudcrud.com/api/41ed7a02c44041279257762a25983f2e/${email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add product to cart.");
      }
      fetchCartData();
    }
  } catch (error) {
    console.error(error);
  }
}

const fetchCartData = async () => {
  try {
    const response = await fetch(
      `https://crudcrud.com/api/41ed7a02c44041279257762a25983f2e/${email}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch cart data.");
    }
    const data = await response.json();
    setItems(data);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchCartData();
}, [email]);

   const removeFromCartHandler=async (item)=>{
    console.log(item);
    try {
      const updatedItemsArray = [...items];
      const existingItemIndex = updatedItemsArray.findIndex(
        (existingItem) => existingItem.title === item.title
      );
      const itemIdToUpdate = updatedItemsArray[existingItemIndex]._id;

      if (existingItemIndex !== -1) {
          console.log(itemIdToUpdate);
          const response = await axios.delete(
            `https://crudcrud.com/api/41ed7a02c44041279257762a25983f2e/${email}/${itemIdToUpdate}`);
          fetchCartData();
        
      }
    } catch (error) {
      console.error(error);
    }
   }
   console.log(items);
   const total=items.reduce((curNumber,item)=>{
    return curNumber+(item.quantity*item.price);
  },0)

  const totalItems=items.reduce((curNumber,item)=>{
    return curNumber+(item.quantity);
  },0)

  const clearCart=async ()=>{
    try{
   await axios.delete(`https://crudcrud.com/api/41ed7a02c44041279257762a25983f2e/${email}/`)
    }catch(e){
      console.log('Error',e);
    }
    fetchCartData()
  }

    const cartContext={
     items:items,
     totalAmount:total,
     totalItems:totalItems,
     addToCart:addToCartHandler,
     removeFromCart:removeFromCartHandler,
     clearCart:clearCart
    }
    return <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
     
}

export default CartProvider