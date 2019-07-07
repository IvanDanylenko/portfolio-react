import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './app.css';

import Navbar from '../navbar';
import HomePage from '../home-page';
import AboutPage from '../about-page';
import ResumePage from '../resume-page';
import PortfolioPage from '../portfolio-page';
import BlogPage from '../blog-page';

export default class App extends Component {

	state = {}

	render() {
		return (
			<div className="app">
				<Router>
					<div className="navbar-wrapper">
						<Navbar />
					</div>
					<div className="content-wrapper">
						<Route path="/" exact component={HomePage} />
						<Route path="/about" component={AboutPage} />
						<Route path="/resume" component={ResumePage} />
						<Route path="/portfolio" component={PortfolioPage} />
						<Route path="/blog" component={BlogPage} />
					</div>
				</Router>
			</div>
		);
	}
}
