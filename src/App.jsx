import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './Components/CartContext';
import Layout from './Routes/Layout';
import Login from './Components/Login';
import Signup from './Components/Signup';
import About from './Components/About';
import Home from './Components/Home';
import ProductPage from './Components/ProductPage';
import ProductDetail from './Components/ProductDetail';
import OrderPage from './Components/OrderPage';
import Cart from './Components/Cart';
import AccountPage from './Components/AccountPage';
import NotFound from './Components/NotFound';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/ProductPage" element={<ProductPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<AccountPage />} />
             <Route path="/notfound" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
