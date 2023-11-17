import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import styles from './ShowProduct.module.css'

function ShowProducts(props) {
  return (
    <Col xs={12} sm={6} lg={3} className={styles.item}>
    <Card>
    <Card.Img variant="top" src={props.image} className={styles.image} />
    <Card.Body>
      <Card.Title>{props.title} </Card.Title>
      <div className={styles.add_to_cart}>
      <Card.Text>
        ${props.price}
      </Card.Text>
      <Button variant="primary">Add To Cart</Button>
      </div>
    </Card.Body>
  </Card>
  </Col>
  )
}

export default ShowProducts