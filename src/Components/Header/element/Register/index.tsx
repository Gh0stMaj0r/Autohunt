import React from 'react';
import './Register.scss'

import { IoMdClose } from "react-icons/io";

interface RegisterProps {
  isActive: boolean;
  onClose: () => void;
}

const Register: React.FC<RegisterProps> = ({ isActive, onClose }) => {
  const handleClickInsideRegisterForm = (event: React.MouseEvent) => {
    // Prevent the click event from propagating to the parent element
    event.stopPropagation();
  };

  return (
    <div className={`register-container ${isActive ? 'active' : ''}`} onClick={handleClickInsideRegisterForm}>
      <a className="close-button" onClick={onClose}><IoMdClose /></a>
      <h2>Register</h2>
      <form>
        {/* Your login form inputs */}
        <label htmlFor="firstname">Firstname:</label>
        <input type="text" id='firstname' name='firstname' />
        <label htmlFor="lastname">Lastname:</label>
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

export default Register;