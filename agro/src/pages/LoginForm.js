import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests
import './LoginForm.css'; // Custom CSS file for styling

const LoginForm = () => {
    const [role, setRole] = useState('user');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Prepare the login data
        const loginData = {
            email: email,
            password: password,
            role: role
        };

        // Send a POST request to the Spring Boot backend
        axios.post('http://localhost:8080/api/login', loginData)
            .then(response => {
                // Handle success, e.g., store the token or redirect
                alert("Login successful: " + response.data);
                // Example: redirect to a dashboard or home page
                // window.location.href = '/dashboard';
            })
            .catch(error => {
                // Handle error, e.g., display an error message
                console.error("There was an error logging in!", error);
                alert("Login failed. Please check your credentials and try again.");
            });
    };

    return (
        <div className="auth-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className="form-group">
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
                </div>
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
                <button type="submit" className="submit-button">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
