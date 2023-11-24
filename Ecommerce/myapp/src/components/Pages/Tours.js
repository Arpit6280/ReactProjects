import React, { Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Tours.module.css";
import Button from "react-bootstrap/Button";

function Tours(props) {
  return (
    <Fragment>
      <Row className={styles.t_row}>
        <Col sm={1}> {props.date} </Col>
        <Col sm={3} className={styles.tour_city}>
          {" "}
          {props.city}{" "}
        </Col>
        <Col sm={6} style={{ color: "#777" }}>
          {" "}
          {props.place}
        </Col>
        <Col sm={2}>
          <Button variant="info" className="text-light fw-bold">
            BUY TICKETS
          </Button>{" "}
        </Col>
      </Row>
      <hr />
    </Fragment>
  );
}

export default Tours;
