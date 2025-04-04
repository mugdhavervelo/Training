import React, { useState } from 'react';
import './Signup.css';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[\W_]/.test(password)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters, include a number, an uppercase letter, at least 1 special character, and 1 number.');
      isValid = false;
    }

    if (isValid) {
      console.log('Signup successful');
      window.location.href = '/login';
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="left-section">
        <div className="vector-image"></div>
        <div className="features">
          <h2>High-yield study plans for exam prep</h2>
          <ul>
            <li>1200+ articles covering conditions & procedures</li>
            <li>Clinical tools incl. checklists, drug dosages, & more</li>
            <li>9,000+ questions for USMLE Step & Shelf exams</li>
          </ul>
        </div>
      </div>
      <div className="right-section">
        <h1 className="title">Join Us Now</h1>
        <p><b>Let's create your account</b></p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="@mail.com" required />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <div className="login-link">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;