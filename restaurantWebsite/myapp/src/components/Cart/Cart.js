import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'

function Cart() {
    const cartItems= <ul className={classes.cart_items}>{[{
        id:'c1', name:'Sushi',amount:3, price:12.99
    }].map((item)=> <li> {item.name} </li>)} </ul>
  return (
    <Modal>
         {cartItems}
         <div className={classes.total}>
            <span>Total Amount</span>
            <span>30.54</span>
         </div>
         <div className={classes.actions}>
            <button className={classes.button_alt}>Close</button>
            <button className={classes.button}>Order</button>
         </div>

    </Modal>
  )
}

export default Cart