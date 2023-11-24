import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import CartContext from '../../store/cart-context'

function Cart(props) {
  const cartCtx=useContext(CartContext)
 
  const cartItems = <ul className={classes.cart_items}>{cartCtx.items.map((item) =>
    <CartItem name={item.name} 
    price={item.price} 
    large={item.large} 
    medium={item.medium}
    small={item.small}
    // onRemove={removeCartHandler.bind(null,item.id)} 
    // onAdd={addCartHandler.bind(null,item)}
     />
)} </ul>
  return (
    <Modal onCartClose={props.onCartClose}>
     {cartItems}
       <div className={classes.total}>
                <span>Total Amount</span>
                <span> {cartCtx.totalAmount} </span>
            </div>
            <div className={classes.actions}>
                <button className={classes.button_alt} onClick={props.onCartClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div> 
    </Modal>
  )
}

export default Cart