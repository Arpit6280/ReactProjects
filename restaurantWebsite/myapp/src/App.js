import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
 const[isCartshown, setIsCartShown]= useState(false)

 const showCartHandler=()=>{
  setIsCartShown(true)
 }

 const closeCartHandler=()=>{
  setIsCartShown(false)
 }

  return (
    <div>
    {isCartshown && <Cart onCartClose={closeCartHandler}/> }
      <Header onCartOpen={showCartHandler} />
      <Meals/>
    </div>
  );
}

export default App;
