import React,{useEffect, useState} from 'react'
import TshirtForm from './TshirtForm'
import TshirtItems from './TshirtItems'
import axios from 'axios'

function Tshirts() {
    const [addTshirt, setAddTshirt] = useState([])
    async function fetchData()
    {        
        try{
        const response = await  axios.get(`https://crudcrud.com/api/c0afb57d68c3475498bde6179978dba7/products`)
        console.log(response);
        const data =response.data;
        setAddTshirt(data)
        console.log(data);
    }catch(e){
        console.log('error',e);
    } 
}
    useEffect(()=>{
    fetchData();
    },[])
    const addTshirtHandler =async (Tshirt) => {
        try{
    const response = await fetch(`https://crudcrud.com/api/c0afb57d68c3475498bde6179978dba7/products`,{
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
    const updateTshirtHandler = async (tshirt,size) => {
        const updatedItemsArray=[...addTshirt]
       const existingItemIndex=addTshirt.findIndex((item)=> item.name===tshirt.name)
       console.log(existingItemIndex);
       if(existingItemIndex!==-1){
       let updatedItem;
       if(size==='L'){
        updatedItemsArray[existingItemIndex].large=Number(updatedItemsArray[existingItemIndex].large)-1
        
       }else if(size==='M'){
        updatedItemsArray[existingItemIndex].medium=Number(updatedItemsArray[existingItemIndex].medium)-1
        
       }else if(size==='S'){
        updatedItemsArray[existingItemIndex].small=Number(updatedItemsArray[existingItemIndex].small)-1
        
       }
     const shirtIdToUpdate=  updatedItemsArray[existingItemIndex]._id
     updatedItem={
        name:tshirt.name,
        price:tshirt.price,
        description:tshirt.description,
        large:updatedItemsArray[existingItemIndex].large,
                small:updatedItemsArray[existingItemIndex].small,
                medium:updatedItemsArray[existingItemIndex].medium
     }
     console.log(updatedItem);
     try{
     await axios.put(`https://crudcrud.com/api/c0afb57d68c3475498bde6179978dba7/products/${shirtIdToUpdate}`,updatedItem)
     fetchData();
     }catch(e){
        console.log('error',e);
     }
    }
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