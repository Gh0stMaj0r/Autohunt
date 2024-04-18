import { useState } from 'react';
import './Register.scss'

import { IoMdClose } from "react-icons/io";
import { MdDriveFileRenameOutline, MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaUser, FaLock } from "react-icons/fa";

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
        <div className="input-flex">
          <div className='input-column'>
            <label htmlFor="firstname">Firstname:</label>
            <div className='input-row-icon'>
              <div className="input-icon-content">
                <MdDriveFileRenameOutline className='input-icon'/>
              </div>
              <input type="text" id='firstname' name='firstname' autoComplete='off' />
            </div>
          </div>

          <div className="input-column">
            <label htmlFor="lastname">Lastname:</label>
            <div className="input-row-icon">
              <div className="input-icon-content">
                <MdDriveFileRenameOutline className='input-icon'/>
              </div>
              <input type="text" id='lastname' name='lastname' autoComplete='off'/>
            </div>
          </div>
        </div>

        <div className="input-column">
          <label htmlFor="email">Email:</label>
          <div className="input-row-icon">
            <div className="input-icon-content">
              <MdEmail className='input-icon'/>
            </div>
            <input type="email" id='email' name='email' autoComplete='off'/>
          </div>
        </div>

        <div className="input-column">
          <label htmlFor="phone">Phone:</label>
          <div className="input-row-icon">
            <div className="input-icon-content">
              <FaPhone className='input-icon'/>
            </div>
            <input type="tel" id='phone' name='phone' autoComplete='off'/>
          </div>
        </div>

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

        <div className="input-column">
          <label htmlFor="password-confirm">Confirm Password:</label>
          <div className="input-row-icon">
            <div className="input-icon-content">
              <FaLock className='input-icon'/>
            </div>
            <input type="password" id='password-confirm' name='password-confirm' autoComplete='off'/>
          </div>
        </div>

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