import React, { useState } from 'react';
import './Login.css'; // Update the CSS filename if necessary
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = () => {
        navigate('/signup'); 
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(''); // Clear previous errors

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();

            if (response.ok) {
                // Login successful
                console.log('Login successful:', data);
                // Here you would usually store the token in local storage and navigate to the "truckconnect" page
                navigate('/truckconnect');
            } else {
                // Login failed
                setError(data.error || 'An unexpected error occurred');
            }
        } catch (error) {
            setError('Network error: Could not connect to the server');
        }
    };

    return (
        <div className="login-container">
            <div className="login-logo">
                {/* Logo placeholder */}
            </div>
            <h1>EasyTrucking</h1>
            <p>Login to access driving features</p>
            {error && <div className="error-message">{error}</div>}
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-container">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-container">
                    <input
                        type="password"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Log In</button>
                <button onClick={handleSignUp} className="signup-footer">
                    Return to Sign Up page
                </button>
            </form>
        </div>
    );
};

export default Login;
