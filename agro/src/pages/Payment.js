// src/pages/Payment.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
    const location = useLocation();
    const { items = [] } = location.state || {};
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const [billingAddress, setBillingAddress] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        alert('Payment submitted!');
    };

    const calculateSubtotal = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="payment-container">
            <h1>Payment Details</h1>
            <div className="payment-content">
                <div className="payment-form">
                    <form onSubmit={handlePaymentSubmit}>
                        <div className="form-group">
                            <label htmlFor="billing-address">Billing Address:</label>
                            <input
                                type="text"
                                id="billing-address"
                                value={billingAddress}
                                onChange={(e) => setBillingAddress(e.target.value)}
                                placeholder="Enter your billing address"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="shipping-address">Shipping Address:</label>
                            <input
                                type="text"
                                id="shipping-address"
                                value={shippingAddress}
                                onChange={(e) => setShippingAddress(e.target.value)}
                                placeholder="Enter your shipping address"
                                required
                            />
                        </div>
                        <div className="form-group payment-methods">
                            <label>Payment Method:</label>
                            <label>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="creditCard"
                                    checked={paymentMethod === 'creditCard'}
                                    onChange={() => setPaymentMethod('creditCard')}
                                />
                                Credit Card
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="paypal"
                                    checked={paymentMethod === 'paypal'}
                                    onChange={() => setPaymentMethod('paypal')}
                                />
                                PayPal
                            </label>
                        </div>
                        {paymentMethod === 'creditCard' && (
                            <div className="form-group credit-card-details">
                                <label htmlFor="card-number">Card Number:</label>
                                <input
                                    type="text"
                                    id="card-number"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    placeholder="Enter your card number"
                                    required
                                />
                                <div className="credit-card-fields">
                                    <div className="form-group">
                                        <label htmlFor="expiry-date">Expiry Date:</label>
                                        <input
                                            type="text"
                                            id="expiry-date"
                                            value={expiryDate}
                                            onChange={(e) => setExpiryDate(e.target.value)}
                                            placeholder="MM/YY"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cvv">CVV:</label>
                                        <input
                                            type="text"
                                            id="cvv"
                                            value={cvv}
                                            onChange={(e) => setCvv(e.target.value)}
                                            placeholder="Enter CVV"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        <button type="submit" className="submit-button">Submit Payment</button>
                    </form>
                </div>
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>₹{item.price.toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                    <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                            <tr className="subtotal-row">
                                <td colSpan="3">Subtotal</td>
                                <td>₹{calculateSubtotal()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Payment;
