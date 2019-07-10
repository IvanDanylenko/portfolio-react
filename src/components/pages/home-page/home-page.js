import React from 'react';
import './home-page.css';

import LangSwitch from './lang-switch';
import Social from './social';

const HomePage = () => {
	return (
		<section className="home">
			<LangSwitch />
			<Social />
			<div className="offer">
				<h1>Alex Smith</h1>
				<p>I am a front-end developer</p>
			</div>
		</section>
	);
}

export default HomePage;