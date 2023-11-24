import React, { useContext, useEffect, useState } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CartContext from "../Store/cart-context";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const handlePurchase = () => {
    alert("Thank You For Purchasing");
    cartCtx.clearCart();
  };
  const cartItems = (
    <ul className={styles.cart_items}>
      {" "}
      {cartCtx.items.map((item) => (
        <CartItem
          item={item}
          title={item.title}
          price={item.price}
          image={item.imageUrl}
          quantity={item.quantity}
        />
      ))}
    </ul>
  );
  return (
    <Modal cartCloseHandler={props.cartCloseHandler}>
      <h2 className="text-center mb-4">CART</h2>
      <hr />
      <Row className={styles.heading}>
        <Col xs={6} className="fw-bold">
          ITEM
        </Col>
        <Col xs={3} className="fw-bold">
          PRICE
        </Col>
        <Col xs={3} className="fw-bold">
          QUANTITY
        </Col>
      </Row>
      {cartItems}
      <div className={styles.total}>${cartCtx.totalAmount}</div>
      <div className={styles.actions}>
        <button className={styles.button_alt} onClick={props.cartCloseHandler}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
