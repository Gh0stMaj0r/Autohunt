import React from "react";

import './Header.scss'

const Navbar = () => {
    return (
		<header id="header" className="wrapper">
			<div className="content header-content">
				<img src='./Images/New-Logo.png' alt='Logo' id='logo'></img>
				{/* Tietokone Linkit */}
				<div className="header-links">
					<a className='link' href='#landing'>Home</a>
					<a className='link' href='#palvelut'>Models</a>
					<a className='link' href='#kuvagalleria'>Parts</a>
					<a className='link' href='#yhteystiedot'>News</a>
                    <a className='link' href='#yhteystiedot'>Contact</a>
				</div>
			</div>
		</header>
    )
}

export default Navbar;