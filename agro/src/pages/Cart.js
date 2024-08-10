// src/pages/Cart.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([
        { id: 1, name: 'Tomato seeds', price: 500.00, quantity: 1 },
        { id: 2, name: 'Beetroot seeds', price: 1000.00, quantity: 2 },
        { id: 3, name: 'cabbage seeds', price: 1500.00, quantity: 1 },
        { id: 4, name: 'fertilizer', price: 200.00, quantity: 3 },
        { id: 5, name: 'organic fertilizer', price: 500.00, quantity: 4 },
        { id: 6, name: 'hoe', price: 1000.00, quantity: 6 },
    ]);

    const handleQuantityChange = (id, quantity) => {
        setItems(items.map(item => 
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
        ));
    };

    const handleRemove = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const calculateSubtotal = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const handleCheckout = () => {
        // Navigate to the payment page and pass the cart data
        navigate('/payment', { state: { items } });
    };

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>₹{item.price.toFixed(2)}</td>
                            <td>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    min="1"
                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                />
                            </td>
                            <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                            <td>
                                <button onClick={() => handleRemove(item.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="cart-summary">
                <p>Subtotal: ₹{calculateSubtotal()}</p>
                <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;
