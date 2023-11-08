import { useEffect, useState } from 'react';
import ProductForm from './components/ProductForm/ProductForm';
import logo from './logo.svg';
import ElectronicItems from './components/Products/ElectronicItems';
import FoodItems from './components/Products/FoodItems';
import SkinCareItems from './components/Products/SkinCareItems';


function App() {
  const [electronic,setElectronic]=useState([]);
  const [foods,setFoods]=useState([]);
  const [skincares,setSkinCares]=useState([]);

  useEffect(()=>{
    productHandler();
  },[])

  const productHandler=()=>{
    const keys= Object.keys(localStorage);
    setFoods([])
    setElectronic([])
    setSkinCares([])

    for(let i=0;i<keys.length;++i){
      const item=localStorage.getItem(keys[i]);
      const product=JSON.parse(item)
      console.log(product);

    if(product.category==='Electronic'){
      setElectronic((prevState)=>{
        return [...prevState,product]
      })
    }
    else if(product.category==='Food'){
        setFoods((prevState)=>{
          return [...prevState, product]
        })
    }else {
       setSkinCares((prevState)=>{
      
          return [...prevState,product]

       })
    }
    }
   
  }
  
  return (
    <div className="App">
      <ProductForm productHandler={productHandler} />
      <ElectronicItems electronicItems={electronic} productHandler={productHandler} />
      <FoodItems  foodItems={foods}  productHandler={productHandler}/>
      <SkinCareItems skinCareItems={skincares} productHandler={productHandler} />
    </div>
  );
}

export default App;
