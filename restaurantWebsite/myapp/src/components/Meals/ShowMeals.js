import React from 'react'
import classes from './ShowMeals.module.css'

function ShowMeals(props) {
  return (
    <div className={classes.showMeals} >
        <h4>{props.name} </h4>
        <p className= {classes.description} >{props.description} </p>
        <p className={classes.price}>${props.price} </p>
        <hr />
    </div>
  )
}

export default ShowMeals