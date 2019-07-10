import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = ({menuData}) => {
	const elements = menuData.map((item) => {
		const { path, icon, title, isActive } = item;
		return (
			<li key={title} className={isActive ? "active" : null}>
				<Link to={path}>
					<i className={icon}></i>
				</Link>
				<span>{title}</span>
			</li>
		);
	});

	return (
		<div className="navbar">
			<div className="logo">
				<img src="/img/logo.png" alt="Logo" />
			</div>
			<nav>
				<ul>
					{elements}
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;