import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import styles from './ShowProduct.module.css'
import CartContext from '../Store/cart-context';
import { Link } from 'react-router-dom';

function ShowProducts(props) {
  const cartCtx=useContext(CartContext)
  const addToCartHand=()=>{
    let item={
      title:props.title,
      price:props.price,
      imageUrl:props.image,
      quantity:1
    }
    cartCtx.addToCart(item);
  }
  return (
   
    <Col xs={12} sm={6} lg={3} className={styles.item}>
    <Card>
    <Link to={`/products/${props.title}`}>
    <Card.Img variant="top" src={props.image} className={styles.image} />
    </Link>
    <Card.Body>
      <Card.Title>{props.title} </Card.Title>
      <div className={styles.add_to_cart}>
      <Card.Text>
        ${props.price}
      </Card.Text>
      <Button variant="primary" onClick={addToCartHand}>Add To Cart</Button>
      </div>
    </Card.Body>
  </Card>
  </Col>
  // </Link>
  )
}

export default ShowProducts