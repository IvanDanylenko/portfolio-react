import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import Navbar from './components/navbar';
import HomePage from './pages/home-page';
import AboutPage from './pages/about-page';
import ResumePage from './pages/resume-page';
import PortfolioPage from './pages/portfolio-page';
import BlogPage from './pages/blog-page';
import ContactPage from './pages/contact-page';

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<BrowserRouter>
					<div className="navbar-wrapper">
						<SimpleBar style={{ height: '100%' }}>
							<Navbar />
						</SimpleBar>
					</div>
					<div className="content-wrapper">
						<SimpleBar style={{ height: '100%' }}>
							<Switch>
								<Route path="/" component={HomePage} exact />
								<Route path="/about" component={AboutPage} exact />
								<Route path="/resume" component={ResumePage} exact />
								<Route path="/portfolio" component={PortfolioPage} exact />
								<Route path="/blog" component={BlogPage} exact />
								<Route path="/contact" component={ContactPage} exact />
								<Redirect to="/" />
							</Switch>
						</SimpleBar>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}
