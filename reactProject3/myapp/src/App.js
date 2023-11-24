import { useState } from 'react';
import CartProvider from './store/CartProvider';
import Cart from './component/Cart/Cart';
import Header from './component/Layout/Header';
import Tshirts from './component/Tshirt/Tshirts';

function App() {
  const[isCartshown, setIsCartShown]= useState(false)

  const showCartHandler=()=>{
   setIsCartShown(true)
  }
 
  const closeCartHandler=()=>{
   setIsCartShown(false)
  }
  return (
    <CartProvider>
      {isCartshown && <Cart onCartClose={closeCartHandler} />}
      <Header onCartOpen={showCartHandler}/>
      <Tshirts/>
    </CartProvider>
  );
}

export default App;
