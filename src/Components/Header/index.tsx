import {useState, useEffect} from "react";

import './Header.scss'
import Login from "./element/Login";
import Register from "./element/Register";


const Navbar = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            setTheme(currentTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        // Set the data-theme attribute on the root element to apply the selected theme
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

	const [activeForm, setActiveForm] = useState('');

	const toggleForm = (form: string) => {
		if (activeForm === form) {
		  setActiveForm('');
		} else {
		  setActiveForm(form);
		}
	  };
    
	return (
		<header id="header" className="wrapper">
			<div className="content header-content">
				<img src='./Images/New-Logo.png' alt='Logo' id='logo'></img>
				{/* Tietokone Linkit */}
				<div className="header-links">
					<a className='link' href='/'>Home</a>
					<a className='link' href='/models'>Models</a>
					<a className='link' href='/sellyourcar'>Sell your car</a>
					<a className='link' href='/news'>News</a>
                    <a className='link' href='/contact'>Contact</a>

					<a className={`log-link link ${activeForm === 'login' ? 'active' : ''}`} onClick={() => toggleForm('login')}>
						Login
					</a>
          			{activeForm === 'login' && <Login isActive={true} onClose={() => setActiveForm('')} toggleForm={toggleForm} />}

          			<a className={`reg-link link ${activeForm === 'register' ? 'active' : ''}`} onClick={() => toggleForm('register')}>
						Register
					</a>
          			{activeForm === 'register' && <Register isActive={true} onClose={() => setActiveForm('')} toggleForm={toggleForm} />}

					<div className="switch">
        				<label className="theme-switch" htmlFor="checkbox">
            				<input type="checkbox" id="checkbox" checked={theme === 'light'} onChange={toggleTheme} />
            				<div className="slider round"></div>
        				</label>
    				</div>
				</div>
			</div>
		</header>
    )
}

export default Navbar;