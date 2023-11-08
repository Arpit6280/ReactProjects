import React from 'react'
import './main.css'

function ElectronicItems(props) {
  const delteHandler =(id)=>{
    localStorage.removeItem(id);
    props.productHandler();
    }

  return (
    <div>
        <h2>Electronic Items</h2>
    { props.electronicItems.map((electronic)=>(
        <div className='items'>
        <li>{electronic.price} -  {electronic.category} {electronic.productName} </li>
        <button className='btn' onClick={()=>delteHandler(electronic.productId)}>Delete Product</button>
        </div>     
    ))}
    </div>
  )
}

export default ElectronicItems