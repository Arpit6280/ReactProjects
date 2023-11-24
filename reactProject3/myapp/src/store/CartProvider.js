import { useEffect, useState } from "react";
import CartContext from "./cart-context"
import axios from "axios";

const CartProvider= props=>{
    const[items,setItems]=useState([])
 
const addItemToCartHandler=async (newItems,size)=>{
try{
   const updatedItemsArray=[...items]
   const existingItemIndex=items.findIndex((item)=> item.name===newItems.name)
   console.log(existingItemIndex);
   const existingCartItem=items[existingItemIndex];
// let updatedItem;
let updatedItems;
  if(existingItemIndex!==-1){
    console.log('jjjj');
    if(size==='L'){
        updatedItemsArray[existingItemIndex].large+=Number(
            newItems.large
        )
        // updatedItem={
        //  ...existingCartItem,
        //  large: parseInt( existingCartItem.large) + parseInt(newItems.large)
        // }
     } 
     else if(size==='M'){
        updatedItemsArray[existingItemIndex].medium+=Number(
            newItems.medium
        )
        // updatedItem={
        //     ...existingCartItem,
        //     medium: parseInt( existingCartItem.medium) + parseInt(newItems.medium)
        //    }
    }else if(size==='S'){
        updatedItemsArray[existingItemIndex].small+=Number(
            newItems.small
        )
        console.log('S');
        // updatedItem={
        //     ...existingCartItem,
        //     small: parseInt( existingCartItem.small) + parseInt(newItems.small)
        //    }
    }
    try{
        const itemIdToUpdate=updatedItemsArray[existingItemIndex]._id;
        const updatedItem={
                name:newItems.name,
                price:newItems.price,
                description:newItems.description,
                large:updatedItemsArray[existingItemIndex].large,
                small:updatedItemsArray[existingItemIndex].small,
                medium:updatedItemsArray[existingItemIndex].medium
              
        }
        await axios.put(`https://crudcrud.com/api/db984f28786c4af1926b649dc088b657/carts/${itemIdToUpdate}`,
        updatedItem)
        fetchData();
    }catch(e){
        console.log('Eroor',e);
    }
  }else{
    const response= await axios.post(`https://crudcrud.com/api/db984f28786c4af1926b649dc088b657/carts/`,newItems)
    // if (!response.ok) {
    //     throw new Error("Failed to add product to cart.");
    //   }
      fetchData();  
}
}catch(e){
    console.log(e);
}
   
}

async function fetchData(){
    const response= await axios.get('https://crudcrud.com/api/db984f28786c4af1926b649dc088b657/carts')
    const data= await response.data;
    console.log(data);
    setItems(data)
    console.log(data);
}

useEffect(()=>{
    fetchData();
},[])

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
    return curNumber+((item.large+item.small+item.medium)*item.price);
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