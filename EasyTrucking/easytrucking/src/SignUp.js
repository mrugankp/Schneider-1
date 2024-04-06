import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = () => {
        navigate('/login'); 
    };

    // Validate email format
    const validateEmail = (email) => {
        // Simple regex for basic email validation
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Reset validation errors
        setEmailError('');
        setPasswordError('');
        setError('');

        let isValid = true;

        // Check if email is empty or invalid
        if (!email) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address');
            isValid = false;
        }

        // Check if password is empty
        if (!password) {
            setPasswordError('Password is required');
            isValid = false;
        }

        if (!isValid) return; // Stop the submission if validation fails

        try {
            const response = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            
            if (response.ok) {
                console.log('Signup successful:', data);
                navigate('/truckconnect'); // Navigate to the TruckConnect route
            } else {
                console.error('Signup failed:', data.error);
                setError(data.error || 'An unexpected error occurred');
            }
        } catch (error) {
            console.error('Network error:', error);
            setError('Network error: Could not connect to the server');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-logo">
                {/* Include your logo here */}
            </div>
            <h1>EasyTrucking</h1>
            <p>Sign up to access driving features</p>
            {error && <div className="error-message">{error}</div>}
            <form className="signup-form" onSubmit={handleSubmit}>
                <div className="input-container">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <div className="validation-error">{emailError}</div>}
                </div>
                <div className="input-container">
                    <input
                        type="password"
                        placeholder="Create a password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <div className="validation-error">{passwordError}</div>}
                </div>
                <button type="submit">Join now</button>
                <button onClick={handleLogin} className="signup-footer">
                    Already a member? Log In
                </button>
            </form>
        </div>
        
    );
};

export default SignUp;
