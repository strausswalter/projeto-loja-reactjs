import "./App.css";
import { lazy, Suspense, useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import { userIsLoggedIn } from "./services/auth/auth";

const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/register/Register"));
const Catalog = lazy(() => import("./pages/catalog/Catalog"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));
const Product = lazy(() => import("./pages/product/Product"));
const NotFound = lazy(() => import("./pages/not-found/NotFound"));

const App = () => {
  
    useEffect(() => {
    }, []);



  return (
    <Router>
      <Suspense fallback={"Carregando..."}>
        <Routes>
          <Route exact path="/" element={<Catalog />} />
          <Route exact path="catalog" element={<Catalog />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="cart" element={<Cart />} />
          <Route exact path="checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
