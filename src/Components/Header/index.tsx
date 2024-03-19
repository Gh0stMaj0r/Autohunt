import {useState, useEffect} from "react";

import './Header.scss'

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
    
	return (
		<header id="header" className="wrapper">
			<div className="content header-content">
				<img src='./Images/New-Logo.png' alt='Logo' id='logo'></img>
				{/* Tietokone Linkit */}
				<div className="header-links">
					<a className='link' href='#landing'>Home</a>
					<a className='link' href='#palvelut'>Models</a>
					<a className='link' href='#palvelut'>Sell your car</a>
					<a className='link' href='#yhteystiedot'>News</a>
                    <a className='link' href='#yhteystiedot'>Contact</a>

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