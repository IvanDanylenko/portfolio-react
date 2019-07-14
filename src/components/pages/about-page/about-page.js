import React from 'react';
import './about-page.css';

import PageHeader from '../common/page-header';
import InfoBox from './info-box';
import MyInterests from './my-interests';
import MyServices from './my-services';
import Testimonials from './testimonials';
import Price from './price';

const AboutPage = () => {
	return (
		<section className="about">
			<div className="container">
				<PageHeader headerText={"About Me"} />
				{/* info box */}
				<InfoBox />
				{/* interest box */}
				<MyInterests />
				{/* services */}
				<MyServices />
				{/* testimonials */}
				<Testimonials />
				{/* Price */}
				<Price />
			</div> {/* end of container */}
		</section>
	);
}

export default AboutPage;