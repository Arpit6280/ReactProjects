import Button from 'react-bootstrap/Button';
import Header from './Header/Header';
import Products from './Product/Products';
import Cart from './Cart/Cart';
import { useState } from 'react';
function App() {
  const[isCartVisible,setIsCartVisible]= useState(false)
  const cartOpenHandler=()=>{
    setIsCartVisible(true)
  }
  const cartCloseHandler=()=>{
    setIsCartVisible(false)
  }
  return (
    <div className="App">
     {isCartVisible && <Cart  cartCloseHandler={cartCloseHandler}/>} 
      <Header cartOpenHandler={cartOpenHandler}/>
      <Products />
    </div>
  );
}

export default App;
