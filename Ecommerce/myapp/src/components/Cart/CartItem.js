import React from 'react'
import styles from './CartItem.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash, } from '@fortawesome/free-solid-svg-icons'

function CartItem(props) {
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
            className={styles.icon} /></Col>
        </Row>
         </Col>
        </Row>
 
    </div>
  )
}

export default CartItem