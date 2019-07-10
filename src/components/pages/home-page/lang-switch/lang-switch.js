import React from 'react';
import './lang-switch.css';

const LangSwitch = () => {
	return (
		<div className="lang">
			<ul>
				<li className="active">
					<button href="#">Eng</button>
				</li>
				<li>
					<button href="#">Rus</button>
				</li>
			</ul>
		</div>
	)
}

export default LangSwitch;