import React from 'react';
import './social.css';

const Social = () => {
	const socialData = [
		{ link: 'vk.com', icon: 'fab fa-facebook-f', title: 'Facebook' },
		{ link: 'vk.com', icon: 'fab fa-twitter', title: 'Twitter' },
		{ link: 'vk.com', icon: 'fab fa-instagram', title: 'Instragram' },
		{ link: 'vk.com', icon: 'fab fa-youtube', title: 'Youtube' }
	];

	const elements = socialData.map((item) => {
		const { link, icon, title } = item;

		return (
			<li key={title}>
				<a href={link}><i className={icon}></i></a>
			</li>
		);
	})

	return (
		<div className="social">
			<ul>
				{elements}
			</ul>
		</div>
	)
}

export default Social;