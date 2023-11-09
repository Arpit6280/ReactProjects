import React from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

function MealItem(props) {
  return (
    <>
    <div className={classes.showMeals} >
    <div>
    <h4>{props.name} </h4>
    <p className= {classes.description} >{props.description} </p>
    <p className={classes.price}>${props.price} </p>
    
    </div>
    <div>
        <MealItemForm />
    </div>
</div>
   <hr />
</>
  )
}

export default MealItem