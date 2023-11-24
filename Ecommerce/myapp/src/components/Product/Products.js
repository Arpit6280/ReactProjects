import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import ShowProducts from "./ShowProducts";
import Container from "react-bootstrap/Container";
import AuthContext from "../Store/auth-context";

function Products() {
  const authCtx = useContext(AuthContext);
  let email = authCtx.email;
  let pos = email.search("@");
  email = email.slice(0, pos);
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <div style={{ marginTop: "2rem" }}>
      <Container>
        <Row>
          {productsArr.map((item) => (
            <ShowProducts
              title={item.title}
              price={item.price}
              image={item.imageUrl}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Products;
