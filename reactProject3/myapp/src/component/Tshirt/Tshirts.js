import React,{useEffect, useState} from 'react'
import TshirtForm from './TshirtForm'
import TshirtItems from './TshirtItems'
import axios from 'axios'

function Tshirts() {
    const [addTshirt, setAddTshirt] = useState([])
    useEffect(()=>{
        async function fetchData()
        {        
            try{
            const response = await  axios.get(`https://crudcrud.com/api/db984f28786c4af1926b649dc088b657/products`)
            console.log(response);
            const data =response.data;
            setAddTshirt(data)
            console.log(data);
        }catch(e){
            console.log('error',e);
        } 
    }
    fetchData();
    console.log('j');
    },[])
    const addTshirtHandler =async (Tshirt) => {
        try{
    const response = await fetch(`https://crudcrud.com/api/db984f28786c4af1926b649dc088b657/products`,{
        method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(Tshirt),
    })
}catch(e){
    console.log('error',e);
}
       setAddTshirt((prevState) => {
          return [...prevState, Tshirt]
       })
    }
    const updateTshirtHandler = (tshirt,size) => {
       const existingItemIndex=addTshirt.findIndex((item)=> item.name===tshirt.name)
       const existingCartItem=addTshirt[existingItemIndex];
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
       updatedItems=[...addTshirt];
       updatedItems[existingItemIndex]=updatedItem
       setAddTshirt(updatedItems);
       console.log(tshirt);
    }
    return (
       <React.Fragment>
          <TshirtForm addTshirt={addTshirtHandler} />
          {addTshirt.map((item) => (
             <TshirtItems
                name={item.name}
                price={item.price} 
                description={item.description} 
                large={item.large} 
                medium={item.medium} 
                small={item.small} 
                updateTshirt={updateTshirtHandler} />
          ))}
       </React.Fragment>
    )
}

export default Tshirts