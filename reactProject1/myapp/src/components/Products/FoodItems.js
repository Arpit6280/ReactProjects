import React from 'react'

function FoodItems(props) {

   const delteHandler =(id)=>{
    localStorage.removeItem(id);
    props.productHandler();
    }
  return (
    <div>
        <h2>Food Items</h2>
    { props.foodItems.map((food)=>( 
        <div className='items'>
        <li> {food.price} -  {food.category} {food.productName} </li>
        <button className='btn' onClick={()=>delteHandler(food.productId)}>Delete Product</button>
        </div> 
    ))}
    </div>
  )
}

export default FoodItems