import React, { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import styles from './ShowProduct.module.css'
import CartContext from '../Store/cart-context';
import { Link } from 'react-router-dom';
import AuthContext from '../Store/auth-context';
import axios from 'axios';

function ShowProducts(props) {
  const cartCtx=useContext(CartContext)
  const authCtx=useContext(AuthContext);
  // let email=authCtx.email;
  // let pos= email.search('@');
  // email=email.slice(0,pos)
  const addToCartHand=async()=>{  

    let item={
      title:props.title,
      price:props.price,
      imageUrl:props.image,
      quantity:1
    }

    cartCtx.addToCart(item)
//     try{
//       let res1= await axios.get(`https://crudcrud.com/api/c9595d57e5364e1e964f4611cfca9984/cart${email}`)
//      let id='';
//      let quan=0;
//       for(let i=0;i<res1.data.length;++i){
//         if(res1.data[i].title===props.title){
//             id=res1.data[i]._id;
//             quan=res1.data[i].quantity;
//         }
//       }

//       if(id.length!==0){
//          await axios.put(`https://crudcrud.com/api/c9595d57e5364e1e964f4611cfca9984/cart${email}/${id}`,{
//           title:props.title,
//           price:props.price,
//           imageUrl:props.image,
//           quantity:quan+1
//          })
//       }
// else{
//    let res= await axios.post(`https://crudcrud.com/api/c9595d57e5364e1e964f4611cfca9984/cart${email}`,{
//       title:props.title,
//       price:props.price,
//       imageUrl:props.image,
//       quantity:1
//     })
//     console.log(res);
//   }
//  } catch(e){
//     console.log(e);
//   }


//   try{
//     let res=await axios.get(`https://crudcrud.com/api/3821b8afa4534f74af96164a28d01961/cart${email}`);
//     // console.log(res);
//     for(let i=0;i<res.data.length;++i){
//       console.log(res.data[i]);
//       let item={
//         title:res.data[i].title,
//         price:res.data[i].price,
//         imageUrl:res.data[i].imageUrl,
//         quantity:res.data[i].quantity
//       }
//       cartCtx.addToCart(item);
//     }
//   }
//   catch(e){
//     console.log('error while fetching',e);
//   }
  }
  
  return (
   
    <Col xs={12} sm={6} lg={3} className={styles.item} >
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