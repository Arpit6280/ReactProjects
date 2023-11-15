import React, { useState } from 'react'
import ShoesForm from './ShoesForm'
import ShoesItem from './ShoesItem'

function Shoes() {
   const [addShoes, setAddShoes] = useState([])
   const addShoesHandler = (shoes) => {
      setAddShoes((prevState) => {
         return [...prevState, shoes]
      })
   }
   const updateShoesHandler = (shoe,size) => {
      const existingItemIndex=addShoes.findIndex((item)=> item.name===shoe.name)
      const existingCartItem=addShoes[existingItemIndex];
      let updatedItem;
      let updatedItems;
      if(size==='L'){
         updatedItem={
          ...existingCartItem,
         large: parseInt(existingCartItem.large) -1
         }
      }else if(size==='M'){
         updatedItem={
            ...existingCartItem,
           medium: parseInt(existingCartItem.medium) -1
           }
      }else if(size==='S'){
         updatedItem={
            ...existingCartItem,
           small: parseInt(existingCartItem.small) -1
           }
      }
      updatedItems=[...addShoes];
      updatedItems[existingItemIndex]=updatedItem
      setAddShoes(updatedItems);
      console.log(shoe);
   }
   return (
      <React.Fragment>
         <ShoesForm addShoes={addShoesHandler} />
         {addShoes.map((item) => (
            <ShoesItem
               name={item.name}
               price={item.price} 
               description={item.description} 
               large={item.large} 
               medium={item.medium} 
               small={item.small} 
               updateShoes={updateShoesHandler} />
         ))}
      </React.Fragment>
   )
}

export default Shoes