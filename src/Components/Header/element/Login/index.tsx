import { useState } from "react";
import './Login.scss'
import Register from "../Register";

import { IoMdClose } from "react-icons/io";

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

	const toggleRegisterForm = () => {
		setIsRegisterActive(!isRegisterActive);
    toggleForm('register'); // Close the active form when login link is clicked
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
        </div>

        <button className='log-button' type="submit">Login</button>

        <div className="form-row">
            <p>Don't have account? <a onClick={toggleRegisterForm}>Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;