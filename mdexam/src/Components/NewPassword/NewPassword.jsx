import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewPassword.css';

const NewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError('');
    setConfirmPasswordError('');

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters, include 1 uppercase letter, 1 number, and 1 special character.');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      return;
    }

    console.log('New password set successfully:', password);
    navigate('/login'); // Redirect to login after setting the password
  };

  return (
    <div className="new-password-wrapper">
      <div className="new-password-box">
        <h2 style={{ fontWeight: 600 }}>New <span style={{ color: "#6d7ae0" }}>Password</span></h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              required
              className="password-input"
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
            {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}
          </div>

          <button type="submit" className="confirm-button">CONFIRM</button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
