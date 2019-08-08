import React from 'react';
import './experience.scss';

const Experience = () => {
	return (
		<div>
			<div className="header-box mb-50">
				<h3>Experience</h3>
			</div>
			<div className="experience box">
				<div className="item">
					<div className="main">
						<h4>Web Design</h4>
						<p><i className="far fa-calendar-alt"></i>2012 - 2014 | Сompany Inc</p>
					</div>
					<p>Work experience is essential for getting a job. Whether it's a short work placement or a longer internship, work experience is always viewed favourably by employers and can help you decide your future career.</p>
				</div>
				<div className="item">
					<div className="main">
						<h4>Fornt-End Developer</h4>
						<p><i className="far fa-calendar-alt"></i>2014 - 2015 | Сompany Inc</p>
					</div>
					<p>Work experience is essential for getting a job. Whether it's a short work placement or a longer internship, work experience is always viewed favourably by employers and can help you decide your future career.</p>
				</div>
				<div className="item">
					<div className="main">
						<h4>Web Development</h4>
						<p><i className="far fa-calendar-alt"></i>2015 - 2019 | Сompany Inc</p>
					</div>
					<p>Work experience is essential for getting a job. Whether it's a short work placement or a longer internship, work experience is always viewed favourably by employers and can help you decide your future career.</p>
				</div>
			</div>
		</div>
	);
}

export default Experience;