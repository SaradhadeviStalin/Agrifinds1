import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './Auth.css';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                {isLogin ? <LoginForm /> : <RegisterForm />}
                <div className="toggle-form">
                    {isLogin ? (
                        <p>
                            Don't have an account? <button onClick={toggleForm}>Register</button>
                        </p>
                    ) : (
                        <p>
                            Have an account? <button onClick={toggleForm}>Login</button>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
