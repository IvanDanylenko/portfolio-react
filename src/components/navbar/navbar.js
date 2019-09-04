import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Music from '../music/music';

import './navbar.scss';

class Navbar extends Component {
	state = {
		menu: [
			{ path: "/", icon: "fas fa-house-damage", title: "Home", hotkey: '1', isActive: false },
			{ path: "/about", icon: "fas fa-user-tie", title: "About Me", hotkey: '2', isActive: false },
			{ path: "/resume", icon: "fas fa-address-book", title: "Resume", hotkey: '3', isActive: false },
			{ path: "/portfolio", icon: "fas fa-briefcase", title: "Portfolio", hotkey: '4', isActive: false },
			{ path: "/blog", icon: "fas fa-receipt", title: "Blog", hotkey: '5', isActive: false },
			{ path: "/contact", icon: "fas fa-envelope", title: "Contact", hotkey: '6', isActive: false }
		]
	}

	componentDidMount() {
		this.setActiveMenuItem();

		document.addEventListener('keydown', this.manageShortcuts)
	}

	componentDidUpdate(prevProps) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			this.setActiveMenuItem();
		}
	}

	manageShortcuts = (e) => {
		const target = e.target.localName;
		if (target !== 'input' && target !== 'textarea') {
			const { menu } = this.state;
			const action = menu.find((item) => item.hotkey === e.key);
			if (action && action.isActive === false) {
				this.props.history.push(action.path);
			}
		}
	}

	setActiveMenuItem = () => {
		const { pathname: path } = this.props.location;
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
						{ menu.map(({path, icon, title, hotkey, isActive}) => (
								<li 
									key={title} 
									className={isActive ? "active" : null}>
									<Link to={path}>
										<i className={icon}></i>
									</Link>
									<span>{`${title} (${hotkey})`}</span>
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