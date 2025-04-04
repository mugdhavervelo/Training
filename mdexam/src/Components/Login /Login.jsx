import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Load saved email and password from localStorage on component mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    const savedPassword = localStorage.getItem('rememberedPassword');
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRemember(true);
    }
  }, []);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) && // At least one uppercase letter
      /[0-9]/.test(password) && // At least one number
      /[\W_]/.test(password)    // At least one special character
    );
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setEmailError('');
    setPasswordError('');

    let isValid = true;

    // Validate email
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }

    // Validate password
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters, include a number, an uppercase letter, at least 1 special character, and 1 number.');
      isValid = false;
    }
    

    // If all validations pass
    if (isValid) {
      console.log('Sign in successful');

      // Save email and password to localStorage if "Remember Me" is checked
      if (remember) {
        localStorage.setItem('rememberedEmail', email);
        localStorage.setItem('rememberedPassword', password);
      } else {
        // Clear saved email and password if "Remember Me" is unchecked
        localStorage.removeItem('rememberedEmail');
        localStorage.removeItem('rememberedPassword');
      }

      window.location.href = '/dashboard'; // Redirect after successful login
    }
  };

  const handleSocialLogin = (provider) => {
    let authUrl = '';
    if (provider === 'google') {
      const clientId = 'YOUR_GOOGLE_CLIENT_ID';
      const redirectUri = encodeURIComponent('YOUR_REDIRECT_URI');
      const scope = encodeURIComponent('profile email');
      authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
    } else if (provider === 'facebook') {
      const clientId = 'YOUR_FACEBOOK_APP_ID';
      const redirectUri = encodeURIComponent('YOUR_REDIRECT_URI');
      const scope = encodeURIComponent('email');
      authUrl = `https://www.facebook.com/v12.0/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
    }

    // Redirect to the provider's login page
    if (authUrl) {
      window.location.href = authUrl;
    } else {
      console.error('Invalid provider');
    }
  };

  return (
    <div className="login-wrapper">
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
        <h1 className="logo">MDExamPrep</h1>
        <p><b>Login to your account to continue</b></p>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="@mail.com"
              required
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>

          <div className="remember-forgot-line" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
            <div className="form-group remember-me">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />{' '}
              Remember Me
              <Link to="/forgot-password" className="forgot-password">
              Forgot password?
              </Link>
            </div>
          </div>
          <button type="submit" className="sign-in-button">
            Sign in
          </button>
        </form>
        <div className="social-login">
          <p>or</p>
          <p style={{ color: '#6d7ae0' }}>Sign in with</p>

          <button className="google-login" onClick={() => handleSocialLogin('google')}>
            <img src="/images/google.png" alt="Google" width="30" height="30" />
          </button>
          <button className="facebook-login" onClick={() => handleSocialLogin('facebook')}>
            <img src="./images/facebook.png" alt="Facebook" width="30" height="30" />
          </button>
        </div>
        <div className="signup-link">
          <p>
            Don't have an account? <a href="./Signup/SignupPage.jsx">Signup</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;