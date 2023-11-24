import React, { useContext } from 'react'
import classes from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartShopping } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../store/cart-context'

function Header(props) {
  const cartContext=useContext(CartContext);
  const noOfCartItems=cartContext.items.reduce((curNumber,item)=>{
    return curNumber+(item.medium+item.large+item.small)
  },0)
  return (
    <React.Fragment>
        <nav className={classes.navbar}>
            <h2>ReactTshirt</h2>
            <div className={classes.cartIcon}> <h4 className={classes.h4}>
            <FontAwesomeIcon icon={faCartShopping} onClick={props.onCartOpen} 
            className={classes.icon} /> Your Cart   
            <span> {noOfCartItems} </span> </h4>
            </div>
        </nav>
    </React.Fragment>
  )
}

export default Header