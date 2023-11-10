import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

function Cart(props) {
    const cartCtx=useContext(CartContext)
    const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`;
    const removeCartHandler=(id)=>{
       cartCtx.removeItem(id);
    }
    const addCartHandler=(item)=>{

    }
    const cartItems = <ul className={classes.cart_items}>{cartCtx.items.map((item) =>
         <CartItem name={item.name} 
         price={item.price} 
         amount={item.amount} 
         onRemove={removeCartHandler.bind(null,item.id)} 
         onAdd={addCartHandler.bind(null,item)} />
    )} </ul>
    return (
        <Modal onCartClose={props.onCartClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span> {totalAmount} </span>
            </div>
            <div className={classes.actions}>
                <button className={classes.button_alt} onClick={props.onCartClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>

        </Modal>
    )
}

export default Cart