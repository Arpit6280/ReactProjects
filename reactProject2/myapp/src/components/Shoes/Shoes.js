import React, { useState } from 'react'
import ShoesForm from './ShoesForm'
import ShoesItem from './ShoesItem'

function Shoes() {
   const[addShoes,setAddShoes]=  useState([])
    const addShoesHandler=(shoes)=>{
       setAddShoes((prevState)=>{
    return [...prevState,shoes]
       })
    }
  return (
    <div>
        <ShoesForm addShoes={addShoesHandler}/>
         {addShoes.map((item)=>(
            <ShoesItem name={item.name} price={item.price} description={item.description} large={item.large} medium={item.medium} small={item.small} />
         ))}    
    </div>
  )
}

export default Shoes