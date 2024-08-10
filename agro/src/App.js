import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Schemes from './pages/Schemes';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Experts from './pages/Experts';
import Payment from './pages/Payment';
import RegisterForm from './pages/RegisterForm';
import LoginForm from './pages/LoginForm';
import Seeds from './pages/Seeds';
import Tools from './pages/Tools';
import Fertilizers from './pages/Fertilizers';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/seeds" element={<Seeds />} />
        <Route path="/products/tools" element={<Tools />} />
        <Route path="/products/fertilizers" element={<Fertilizers />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
