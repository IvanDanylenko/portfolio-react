import React from 'react';
import './education.scss';

const Education = () => {
	const education = [
		{
			title: 'Phd',
			years: '2011 - 2013',
			area: 'Computer Science',
			desc: `Work experience is essential for getting a job. Whether it's a short work placement or a longer internship, work experience is always viewed favourably by employers and can help you decide your future career.`
		},
		{
			title: 'Post Graduation',
			years: '2013 - 2016',
			area: 'Computer Science',
			desc: `Work experience is essential for getting a job. Whether it's a short work placement or a longer internship, work experience is always viewed favourably by employers and can help you decide your future career.`
		},
		{
			title: 'Gradution',
			years: '2016 - 2018',
			area: 'Computer Science',
			desc: `Work experience is essential for getting a job. Whether it's a short work placement or a longer internship, work experience is always viewed favourably by employers and can help you decide your future career.`
		},
	];

	return (
		<div>
			<div className="header-box mb-50">
				<h3>Education</h3>
			</div>
			<div className="experience box">
				{ education.map((item) => (
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

export default Education;