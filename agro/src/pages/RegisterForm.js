import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';

const RegisterForm = () => {
    const [role, setRole] = useState('user');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(''); 
    const [success, setSuccess] = useState(''); 

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (!email || !password || !confirmPassword) {
            setError('Please fill in all fields');
            return;
        }

        try {
            const user = { email, password, role };
            const response = await axios.post('http://localhost:8080/api/register', user);
            setSuccess('Registration successful!'); // Set success message
            // Optionally redirect or reset the form here
        } catch (error) {
            // Check for specific error response if available
            if (error.response && error.response.data) {
                setError(error.response.data || 'Registration failed. Please try again.');
            } else {
                setError('Registration failed. Please try again.');
            }
        }
    };

    return (
        <div className="auth-container">
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                {/* <div className="form-group">
                    <label htmlFor="role">Role:</label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div> */}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Register</button>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
            </form>
        </div>
    );
};

export default RegisterForm;
