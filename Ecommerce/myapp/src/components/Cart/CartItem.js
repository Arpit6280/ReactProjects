import React, { useContext } from 'react'
import styles from './CartItem.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash, } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../Store/cart-context';

function CartItem(props) {
  const cartCtx=useContext(CartContext)
  const deleteProductHandler=()=>{
   
     cartCtx.removeFromCart(props.item)
  }
  return (
    <div>
    
    <Row className={styles.cart_item}>
        <Col xs={6}>
        <Row>
            <Col xs={4}><img src={props.image} alt='Imag' className={styles.img} /> </Col>
            <Col>{props.title} </Col>
        </Row>
        </Col>
        <Col xs={3}>${props.price} </Col>
        <Col xs={3}> 
        <Row>
            <Col xs={4}><p> {props.quantity}</p></Col>
            <Col xs={2}> <FontAwesomeIcon icon={faTrash} 
            className={styles.icon} onClick={deleteProductHandler} /></Col>
        </Row>
         </Col>
        </Row>
     <hr />
    </div>
  )
}

export default CartItem