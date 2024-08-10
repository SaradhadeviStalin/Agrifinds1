// src/pages/Products.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';  // Adjust path based on actual location

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h1>Products</h1>
      {/* Render products and add to cart functionality */}
    </div>
  );
};

export default Products;
