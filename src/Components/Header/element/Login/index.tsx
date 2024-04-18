import { useState } from "react";
import './Login.scss'
import ForgotPassword from "../ForgotYourPassword";

import { IoMdClose } from "react-icons/io";
import { FaUser, FaLock } from "react-icons/fa";

interface LoginProps {
  isActive: boolean;
  onClose: () => void;
  toggleForm: (form: string) => void;
}

const Login: React.FC<LoginProps> = ({ isActive, onClose, toggleForm }) => {
  const handleClickInsideLoginForm = (event: React.MouseEvent) => {
    // Prevent the click event from propagating to the parent element
    event.stopPropagation();
  };

  const [isRegisterActive, setIsRegisterActive] = useState(false);
  const [isForgotPasswordActive, setIsForgotPasswordActive] = useState(false);

	const toggleRegisterForm = () => {
		setIsRegisterActive(!isRegisterActive);
    toggleForm('register'); // Close the active form when login link is clicked
	};

  const toggleForgotPasswordForm = () => {
    setIsForgotPasswordActive(!isForgotPasswordActive);
    toggleForm('forgotpassword'); // Toggle the visibility of the Forgot Password form
  };

  return (
    <div className={`login-container ${isActive ? 'active' : ''}`} onClick={handleClickInsideLoginForm}>
      <a className="close-button" onClick={onClose}><IoMdClose /></a>
      <h2>Login</h2>
      <form>
        {/* Your login form inputs */}
        <div className="input-column">
          <label htmlFor="username">Username:</label>
          <div className="input-row-icon">
            <div className="input-icon-content">
              <FaUser className='input-icon'/>
            </div>
            <input type="text" id='username' name='username' autoComplete='off'/>
          </div>
        </div>

        <div className="input-column">
          <label htmlFor="password">Password:</label>
          <div className="input-row-icon">
            <div className="input-icon-content">
              <FaLock className='input-icon'/>
            </div>
            <input type="password" id='password' name='password' autoComplete='off'/>
          </div>
        </div>

        <div className="form-row">
                <a onClick={toggleForgotPasswordForm}>Forgot Your Password?</a>
        </div>
        {isForgotPasswordActive && <ForgotPassword isActive={true} onClose={() => setIsForgotPasswordActive(false)} toggleForm={toggleForm} />}

        <button className='log-button' type="submit">Login</button>

        <div className="form-row">
            <p>Don't have account? <a onClick={toggleRegisterForm}>Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;