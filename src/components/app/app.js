import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './app.scss';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import Navbar from '../navbar';
import HomePage from '../pages/home-page';
import AboutPage from '../pages/about-page';
import ResumePage from '../pages/resume-page';
import PortfolioPage from '../pages/portfolio-page';
import BlogPage from '../pages/blog-page';

export default class App extends Component {

	state = {
		menu: [
			{ path: "/", icon: "fas fa-house-damage", title: "Home", isActive: false },
			{ path: "/about", icon: "fas fa-user-tie", title: "About Me", isActive: false },
			{ path: "/resume", icon: "fas fa-address-book", title: "Resume", isActive: false },
			{ path: "/portfolio", icon: "fas fa-briefcase", title: "Portfolio", isActive: false },
			{ path: "/blog", icon: "fas fa-receipt", title: "Blog", isActive: false },
			{ path: "/", icon: "fas fa-envelope", title: "Contact", isActive: false }
		]
	}

	render() {
		return (
			<div className="app">
				<Router>
					<div className="navbar-wrapper">
						<SimpleBar style={{ height: '100%' }}>
							<Navbar menuData = {this.state.menu} />
						</SimpleBar>
					</div>
					<div className="content-wrapper">
						<SimpleBar style={{ height: '100%' }}>
							<Route path="/" exact component={HomePage} />
							<Route path="/about" component={AboutPage} />
							<Route path="/resume" component={ResumePage} />
							<Route path="/portfolio" component={PortfolioPage} />
							<Route path="/blog" component={BlogPage} />
						</SimpleBar>
					</div>
				</Router>
			</div>
		);
	}
}
