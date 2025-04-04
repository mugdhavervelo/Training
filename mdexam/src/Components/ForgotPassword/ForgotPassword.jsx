import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError('');
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    console.log('Password reset link sent to:', email);
  };

  return (
    <div className="forgot-password-wrapper">
      <div className="forgot-password-box">
      <h2 style={{ fontWeight: 600 }}>Forgot <span style={{ color: "#6d7ae0" }}>Password</span></h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <p className="back-to-signin" onClick={() => navigate('/login')}>Back to Sign In</p>
          <button type="submit" className="send-button">SEND</button>

          <div className="signup-link">
          <p>
            Don't have an account? <a href="./Signup/SignupPage.jsx">Signup</a>
          </p>
          <Link to="/new-password" className="new-password">New Password</Link>
    
        </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
