import { useState } from 'react';
import Header from './components/Layout/Header';
import Shoes from './components/Shoes/Shoes';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
// import ShoesForm from './components/Shoes/ShoesForm';

function App() {
  // useState
  const[isCartshown, setIsCartShown]= useState(false)

  const showCartHandler=()=>{
   setIsCartShown(true)
  }
 
  const closeCartHandler=()=>{
   setIsCartShown(false)
  }
  return (
    <CartProvider>
          {isCartshown && <Cart onCartClose={closeCartHandler}/> }
     <Header onCartOpen={showCartHandler} />
     <Shoes />
    </CartProvider>
  );
}

export default App;
