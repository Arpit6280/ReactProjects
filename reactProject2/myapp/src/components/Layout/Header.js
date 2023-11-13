import React, { useContext } from 'react'
import classes from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartShopping } from '@fortawesome/free-solid-svg-icons'
import mealImg from '../../assets/meals.jpg'
// import CartContext from '../../store/cart-context'

function Header(props) {
//   const cartContext=useContext(CartContext);
//   const noOfCartItems=cartContext.items.reduce((curNumber,item)=>{
//     return curNumber+item.amount
//   },0)
  return (
    <React.Fragment>
        <nav className={classes.navbar}>
            <h2>ReactMeals</h2>
            <div className={classes.cartIcon}> <h4 className={classes.h4}>
            <FontAwesomeIcon icon={faCartShopping} onClick={props.onCartOpen} 
            className={classes.icon} /> Your Cart   
            <span> 0 </span> </h4>
            </div>
        </nav>
        <div >
            <img src={mealImg} alt="" className={classes.mealImg}  />
        </div>
    </React.Fragment>
  )
}

export default Header