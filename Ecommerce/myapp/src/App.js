import Header from './components/Header/Header';
import Products from './components/Product/Products';
import Cart from './components/Cart/Cart';
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
