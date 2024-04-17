import { useState } from 'react';
import './Register.scss'
import Login from '../Login';

import { IoMdClose } from "react-icons/io";

interface RegisterProps {
  isActive: boolean;
  onClose: () => void;
  toggleForm: (form: string) => void;
}

const Register: React.FC<RegisterProps> = ({ isActive, onClose, toggleForm }) => {
  const handleClickInsideRegisterForm = (event: React.MouseEvent) => {
    // Prevent the click event from propagating to the parent element
    event.stopPropagation();
  };

  const [isLoginActive, setIsLoginActive] = useState(false);

	const toggleLoginForm = () => {
		setIsLoginActive(!isLoginActive);
    toggleForm('login'); // Close the active form when login link is clicked
	};

  return (
    <div className={`register-container ${isActive ? 'active' : ''}`} onClick={handleClickInsideRegisterForm}>
      <a className="close-button" onClick={onClose}><IoMdClose /></a>
      <h2>Register</h2>
      <form>
        {/* Your login form inputs */}
        <label htmlFor="username">Username:</label>
        <input type="text" id='username' name='username' />

        <label htmlFor="password">Password:</label>
        <input type="text" id='password' name='password' />

        <label htmlFor="firstname">Firstname:</label>
        <input type="text" id='firstname' name='firstname' />

        <label htmlFor="lastname">Lastname:</label>
        <input type="password" id='lastname' name='lastname' />

        <label htmlFor="email">Email:</label>
        <input type="email" id='email' name='email' />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id='phone' name='phone' />

        <br></br>

        <button className='reg-button' type="submit">Create User</button>

        <div className="form-row-reg">
          <p>Already have an account? <a onClick={toggleLoginForm}>Login</a></p>
        </div>
      </form>
    </div>
  );
};

export default Register;