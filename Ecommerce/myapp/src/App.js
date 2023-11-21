import Products from "./components/Product/Products";
import Cart from "./components/Cart/Cart";
import { Fragment, useContext, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import AboutPage from "./components/Pages/AboutPage";
import HomePage from "./components/Pages/HomePage";
import ContactPage from "./components/Pages/ContactPage";
import Header from "./components/Header/Header";
import ProductDetails from "./components/Product/ProductDetails";
import AuthForm from "./components/Auth/AuthForm";
import AuthContext from "./components/Store/auth-context";
import Footer from "./components/Header/Footer";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const cartOpenHandler = () => {
    setIsCartVisible(true);
  };
  const cartCloseHandler = () => {
    setIsCartVisible(false);
  };
  return (
    <Fragment>
      <BrowserRouter>
        <Header cartOpenHandler={cartOpenHandler} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthForm />} />
          {isLoggedIn ? (
            <Route path="/products" element={isLoggedIn && <Products />} />
          ) : (
            <Route
              path="/products"
              element={<Navigate to="/auth" replace={true} />}
            />
          )}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          
        </Routes>
       <Footer/>
      </BrowserRouter>
      {isCartVisible && <Cart cartCloseHandler={cartCloseHandler} />}
    </Fragment>
  );
}

export default App;
