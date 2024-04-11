import React from 'react';
import './Login.scss'

import { IoMdClose } from "react-icons/io";

interface LoginProps {
  isActive: boolean;
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ isActive, onClose }) => {
  const handleClickInsideLoginForm = (event: React.MouseEvent) => {
    // Prevent the click event from propagating to the parent element
    event.stopPropagation();
  };

  return (
    <div className={`login-container ${isActive ? 'active' : ''}`} onClick={handleClickInsideLoginForm}>
      <a className="close-button" onClick={onClose}><IoMdClose /></a>
      <h2>Login</h2>
      <form>
        {/* Your login form inputs */}
        <label htmlFor="username">Username:</label>
        <input type="text" id='username' name='username' />
        <label htmlFor="password">Password:</label>
        <input type="password" id='password' name='password' />

        <div className="form-row">
                <a href="">Forgot Your Password?</a>
                <a href="">I Don't Have User</a>
        </div>

        <button className='log-button' type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;