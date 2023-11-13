import React from 'react'

function ShoesItem(props) {
    const largeHandler=(e)=>{
        
    }
  return (
    <div>
        <li> {props.name}
         {props.description}
          {props.price} 
          <button onClick={largeHandler}> Buy Large {props.large} </button>  
          <button> Buy Medium {props.medium} </button> 
          <button> Buy Small {props.small}</button>  
          </li>
    </div>
  )
}

export default ShoesItem