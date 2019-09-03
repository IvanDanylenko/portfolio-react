import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Music from '../music/music';

import './navbar.scss';

class Navbar extends Component {
	state = {
		menu: [
			{ path: "/", icon: "fas fa-house-damage", title: "Home", isActive: false },
			{ path: "/about", icon: "fas fa-user-tie", title: "About Me", isActive: false },
			{ path: "/resume", icon: "fas fa-address-book", title: "Resume", isActive: false },
			{ path: "/portfolio", icon: "fas fa-briefcase", title: "Portfolio", isActive: false },
			{ path: "/blog", icon: "fas fa-receipt", title: "Blog", isActive: false },
			{ path: "/contact", icon: "fas fa-envelope", title: "Contact", isActive: false }
		]
	}

	componentDidMount() {
		// set initial active menu element
		const path = window.location.pathname;
		this.setActiveMenuItem(path);
	}

	toggleActive = (path) => {
		this.setActiveMenuItem(path);
	}

	setActiveMenuItem = (path) => {
		this.setState(({menu}) => {
			const arr = menu.slice();
			arr.forEach(element => {
				element.path === path ? element.isActive = true : element.isActive = false;
			});
			return {
				menu: arr
			}
		})
	}

	render() {
		const { menu } = this.state;

		return (
			<div className="navbar">
				<div className="logo">
					<img src="/img/logo.png" alt="Logo" />
				</div>
				<nav>
					<ul>
						{ menu.map(({path, icon, title, isActive}) => (
								<li 
									key={title} 
									className={isActive ? "active" : null}
									onClick={() => { this.toggleActive(path) }}>
									<Link to={path}>
										<i className={icon}></i>
									</Link>
									<span>{title}</span>
								</li>
							)) }
					</ul>
				</nav>
				<Music />
			</div>
		);
	}
}

export default Navbar;