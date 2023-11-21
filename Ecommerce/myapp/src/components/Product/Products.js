import React, { useContext, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShowProducts from './ShowProducts';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import CartContext from '../Store/cart-context';
import AuthContext from '../Store/auth-context';

function Products() {
  const cartCtx=useContext(CartContext)
  const authCtx=useContext(AuthContext)
  let email=authCtx.email;
  let pos= email.search('@');
  email=email.slice(0,pos)
  const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]

    // useEffect(()=>{
    //      axios.get(`https://crudcrud.com/api/c9595d57e5364e1e964f4611cfca9984/cart${email}`).then((res)=>{
    //       console.log(res);
    //       for(let i=0;i<res.data.length;++i){
    //         let item={
    //           title:res.data[i].title,
    //           price:res.data[i].price,
    //           imageUrl:res.data[i].imageUrl,
    //           quantity:res.data[i].quantity
    //         }
    //         cartCtx.addToCart(item);
    //       }
    //      }).catch((e)=>{
    //       console.log('error while fetching',e);
    //      })

    // },[])
  return (
    <div style={{marginTop:'2rem'}}>
       <Container>
    <Row>
     
      {productsArr.map((item)=>(
        <ShowProducts title={item.title} price={item.price} image={item.imageUrl} />
      ))}
    </Row>
    </Container>
    </div>
  )
}

export default Products