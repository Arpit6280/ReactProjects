import React from 'react'
import classes from  './Input.module.css'

function Input(props) {
    const inputHandler=(e)=>{
    props.amountHandler(e.target.value)
    }
  return (
    <div className={classes.input}>
       <label htmlFor={props.input.id}> {props.label} </label>
       <input {...props.input} onChange={inputHandler} />
    </div>
  )
}

export default Input