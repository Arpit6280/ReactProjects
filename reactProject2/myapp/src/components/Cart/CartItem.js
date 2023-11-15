import React from 'react'
import classes from './CartItem.module.css';


function CartItem(props) {
  let medium=0
  let totalShoes=props.large+props.medium+props.small;
 let totalShoeAmount=totalShoes* props.price
  return (
    <li className={classes['cart-item']}>
    <div>
      <h2>{props.name}</h2>
      <div className={classes.summary}>
        <span className={classes.price}> ${props.price} -  </span>
        <span className={classes.amount}> {props.large} L</span>
        <span className={classes.amount}> {props.medium} M</span>
        <span className={classes.amount}>{props.small} S</span>
      </div>
    </div>
    <div className={classes.actions}>
      <p>{props.price} </p>
      <p > *{totalShoes}</p>
      <p>= {totalShoeAmount} </p>
    </div>
  </li>
  )
}

export default CartItem


     {/* {medium?(<span className={classes.amount}> ${props.amount} M</span>):''  }    */}