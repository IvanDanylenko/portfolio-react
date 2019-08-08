import React from 'react';
import './portfolio-filter.scss';

const PortfolioFilter = ({ selected, filter, handleClick }) => {
	const elements = filter.map((item) => {
		return (
			<li key={item} 
					className={item === selected ? "active" : null}
					onClick={()=>{ handleClick(item) }}>
				{item.replace(/[A-z, А-я]/i, function (letter) {
					return letter.toUpperCase();
				})}
			</li>
		);
	});
	return (
		<div className="portfolio-filter mb-100">
			<ul>
				{/* <li className={active === "all" ? "active" : null} data-filter="*">All</li>
				<li className={active === "brand" ? "active" : null} data-filter=".brand">Brand</li>
				<li className={active === "design" ? "active" : null} data-filter=".design">Design</li>
				<li className={active === "graphic" ? "active" : null} data-filter=".graphic">Graphic</li> */}
				{elements}
			</ul>
		</div>
	);
}

export default PortfolioFilter;