import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartShopping } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../Store/cart-context';


function Header(props) {
    const cartCtx=useContext(CartContext)
    return (
        <div >
        <Container fluid>
            <Row className='bg-dark p-4 justify-content-between'>
                <Col>
                    <Row className={styles.navRow}>
                        <Col >HOME</Col>
                        <Col>STORE</Col>
                        <Col>ABOUT</Col>

                    </Row>
                </Col>
                <Col>
              
                        <span className={styles.span}>   <FontAwesomeIcon icon={faCartShopping} 
            className={styles.icon} onClick={props.cartOpenHandler} /> {cartCtx.totalItems} </span>

                </Col>
            </Row>
            <div className={styles.header_top}>
                <p className='text-center display-1 fw-bold'>THE GENERIC</p>
            </div>
        </Container>
        </div>
    )
}

export default Header