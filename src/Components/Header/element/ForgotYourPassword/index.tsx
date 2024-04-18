import React, { useState } from "react";
import './Forgot.scss';

interface ForgotPasswordProps {
  isActive: boolean;
  onClose: () => void;
  toggleForm: (form: string) => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ isActive, onClose, toggleForm }) => {
  const handleClickInsideForgotPasswordForm = (event: React.MouseEvent) => {
    // Prevent the click event from propagating to the parent element
    event.stopPropagation();
  };

  const toggleLoginForm = () => {
    toggleForm('login'); // Toggle the visibility of the Login form
  };

  return (
    <div className={`forgot-password-container ${isActive ? 'active' : ''}`} onClick={handleClickInsideForgotPasswordForm}>
      <div className="content">
        <button className="close-button" onClick={onClose}>Close</button>
        <h2>Forgot Your Password?</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <button type="submit" className="submit-button">Reset Password</button>
        </form>
        <div className="login-link-container">
          <p>Remember your password? <a onClick={toggleLoginForm}>Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;