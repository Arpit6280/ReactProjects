import Products from './components/Product/Products';
import Cart from './components/Cart/Cart';
import { Fragment, useState } from 'react';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import RootPage from './components/Pages/RootPage';
import AboutPage from './components/Pages/AboutPage';
import HomePage from './components/Pages/HomePage';
import ContactPage from './components/Pages/ContactPage';
import Header from './components/Header/Header';
import ProductDetails from './components/Product/ProductDetails';

function App() {
  const[isCartVisible,setIsCartVisible]= useState(false)
  const cartOpenHandler=()=>{
    setIsCartVisible(true)
  }
  const cartCloseHandler=()=>{
    setIsCartVisible(false)
  }
  // const router= createBrowserRouter([
  //   {
  //     path:'/',
  //     element:<RootPage cartOpenHandler={cartOpenHandler} />,
  //     children:[
  //       {path:'/',element:<HomePage/>},
  //       {path:'/products',element:<Products/>},  
  //       {path:'/about',element:<AboutPage />},
  //       {path:'/contact',element:<ContactPage />}
  //     ]
  //   }
  // ])
  return (
    <Fragment>
      <BrowserRouter >
      <Header cartOpenHandler={cartOpenHandler} />

      <Routes>
        <Route path='/' element={<HomePage/>}/> 
        <Route path='/products' element={<Products/>}/> 
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/products/:productId' element={<ProductDetails/>}/>
      </Routes>
      </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
    {isCartVisible && <Cart  cartCloseHandler={cartCloseHandler}/>}
    </Fragment>
  );
}

export default App;
