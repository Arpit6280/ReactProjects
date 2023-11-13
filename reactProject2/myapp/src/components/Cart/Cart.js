import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

function Cart(props) {
  return (
    <Modal>
       <div className={classes.total}>
                <span>Total Amount</span>
                <span> 35 </span>
            </div>
            <div className={classes.actions}>
                <button className={classes.button_alt} onClick={props.onCartClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div> 
    </Modal>
  )
}

export default Cart