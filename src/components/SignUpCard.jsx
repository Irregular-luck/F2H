import React, { useState } from 'react';
import './SignUpCard.css';
import { PiPlantLight } from "react-icons/pi";

export default function SignUpCard({ onNavigate }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Registering user with:", { name, email, password });
  };

  return (
    <div className="layout-wrapper">
      <div className="auth-card">
        <div className="card-brand-logo">
            <PiPlantLight className="logo-icon"/>
            </div>
        <h2 className="main-title">Create your account</h2>
        <p className="sub-title">Join F2H and start exploring the market</p>

        <form onSubmit={handleRegisterSubmit} className="auth-form">
          <div className="input-block">
            <label htmlFor="name-input">Full Name</label>
            <input 
              type="text" 
              id="name-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required 
            />
          </div>

          <div className="input-block">
            <label htmlFor="email-signup-input">Email</label>
            <input 
              type="email" 
              id="email-signup-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@mail.com"
              required 
            />
          </div>

          <div className="input-block">
            <label htmlFor="password-signup-input">Password</label>
            <input 
              type="password" 
              id="password-signup-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <div className="input-block">
            <label htmlFor="confirm-password-input">Confirm Password</label>
            <input 
              type="password" 
              id="confirm-password-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="submit-form-btn">Sign up</button>
        </form>

        <div className="auth-footer">
          <p className="signup-prompt">
            Already have an account? 
            <a href="#signin"
             className="accent-link"
             onClick={(e) => {
                e.preventDefault();
                onNavigate('signin'); 
              }}
             >Sign in</a>
          </p>
          <a href="#market" className="back-navigation">← Back to market</a>
        </div>
      </div>
    </div>
  );
}