import React, { useContext } from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'

function MealItem(props) {
  const cartCtx=useContext(CartContext)
  const addToCartHandler=(amount)=>{
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
    })
  }
  return (
    <>
    <div className={classes.showMeals} >
    <div>
    <h4>{props.name} </h4>
    <p className= {classes.description} >{props.description} </p>
    <p className={classes.price}>${props.price} </p>
    
    </div>
    <div>
        <MealItemForm onAddCart={addToCartHandler}/>
    </div>
</div>
   <hr />
</>
  )
}

export default MealItem