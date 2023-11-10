import React, { useState } from 'react'
import Input from '../../UI/Input'
import classes from  './MealItemForm.module.css'


function MealItemForm(props) {
  const[isFormSubmitted, setIsFormSubmitted]=useState(false)
  let enteredAmnt;
  const amountHandler=(enteredAmount)=>{
  enteredAmnt=enteredAmount;
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    if(enteredAmnt===undefined){
      amountHandler('1');
    }
    const enteredAmountNumber=+enteredAmnt;
    if(enteredAmnt.trim().length===0 || enteredAmountNumber<0){
      return;
    }
   setIsFormSubmitted(true)
   props.onAddCart(enteredAmountNumber)
  }





  return (
    <form className={classes.form} onSubmit={submitHandler}> 
        <Input label="Amount"  amountHandler={amountHandler} input={{
            type:'number', 
            id:'amount', 
            min:'1', 
            max:'10', 
            step:'1' ,
            defaultValue:'1',
            
            }}/>
        <button>+Add</button>
    </form>
  )
}

export default MealItemForm