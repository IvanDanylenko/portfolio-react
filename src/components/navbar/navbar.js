import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<img src="img/logo.png" alt="Logo" />
			</div>
			<nav>
				<ul>
					<li><Link to="/"><i className="fas fa-house-damage"></i>Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/resume">Resume</Link></li>
					<li><Link to="/portfolio">Portfolio</Link></li>
					<li><Link to="/blog">Blog</Link></li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;