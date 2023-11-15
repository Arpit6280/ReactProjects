import { useState } from 'react';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Medicines from './components/Medicines/Medicines';

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
     <Medicines/>
    </CartProvider>
  );
}

export default App;
