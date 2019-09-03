import React from 'react';
import './experience.scss';

const Experience = () => {
	const experience = [
		{
			title: 'Web Design',
			years: '2012 - 2014',
			area: 'Сompany Inc',
			desc: `Work experience is essential for getting a job. Whether it's a short work placement or a longer internship, work experience is always viewed favourably by employers and can help you decide your future career.`
		},
		{
			title: 'Fornt-End Developer',
			years: '2014 - 2015',
			area: 'Сompany Inc',
			desc: `Work experience is essential for getting a job. Whether it's a short work placement or a longer internship, work experience is always viewed favourably by employers and can help you decide your future career.`
		},
		{
			title: 'Web Development',
			years: '2015 - 2019',
			area: 'Сompany Inc',
			desc: `Work experience is essential for getting a job. Whether it's a short work placement or a longer internship, work experience is always viewed favourably by employers and can help you decide your future career.`
		},
	];

	return (
		<div>
			<div className="header-box mb-50">
				<h3>Experience</h3>
			</div>
			<div className="experience box">
				{ experience.map((item) => (
					<div key={item.title} className="item">
						<div className="main">
							<h4>{ item.title }</h4>
							<p>
								<i className="far fa-calendar-alt"></i>
								{ item.years } | { item.area }</p>
						</div>
						<p>{ item.desc }</p>
					</div>
				)) }
			</div>
		</div>
	);
}

export default Experience;