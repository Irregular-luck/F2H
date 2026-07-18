import React, { useState } from 'react';
import './SignInCard.css';
import { PiPlantLight } from "react-icons/pi";

export default function SignInCard({onNavigate}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form values submitted:", { email, password });
  };

  return (
    <div className="layout-wrapper">
      <div className="auth-card">
        <div className="card-brand-logo">
            <PiPlantLight />
</div>
        <h2 className="main-title">Welcome back</h2>
        <p className="sub-title">Sign in to your F2H account</p>

        <form onSubmit={handleFormSubmit} className="auth-form">
          <div className="input-block">
            <label htmlFor="email-input">Email</label>
            <input 
              type="email" 
              id="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-block">
            <label htmlFor="password-input">Password</label>
            <input 
              type="password" 
              id="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-form-btn">Sign in</button>
        </form>

        <div className="auth-footer">
          <p className="signup-prompt">
            Don't have an account? <a href="#signup" 
            className="accent-link" 
            onClick={(e) => {
                e.preventDefault();
                onNavigate('signup'); 
              }}
              >
              Sign up</a>
          </p>
          <a href="#market" className="back-navigation">← Back to market</a>
        </div>
      </div>
    </div>
  );
}