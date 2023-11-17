import React from 'react'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import styles from './Cart.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Cart(props) {
    const cartElements = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
        ]
        const cartItems= <ul className={styles.cart_items}> {cartElements.map((item)=>(
            <CartItem title={item.title}
             price={item.price}  
             image={item.imageUrl} 
             quantity={item.quantity} />
           ))}</ul>
  return (
    <Modal cartCloseHandler={props.cartCloseHandler}>
        <h2 className='text-center mb-4'>CART</h2>
        <hr />
        <Row className={styles.heading}>
            <Col xs={6} className='fw-bold'>ITEM</Col>
            <Col xs={3} className='fw-bold'>PRICE</Col>
            <Col xs={3} className='fw-bold'>QUANTITY</Col>
        </Row>
           {cartItems}
           <div className={styles.actions}>
                <button className={styles.button_alt} onClick={props.cartCloseHandler}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
    </Modal>
  )
}

export default Cart