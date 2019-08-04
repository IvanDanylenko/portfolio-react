import React from 'react';
import './portfolio-items.css';

const PortfolioItems = () => {
	return (
		<div className="portfolio-items row mb-100">
			{/* Portfolio item */}
			<div className="item col-lg-4 col-sm-6 graphic">
				<figure>
					<img src="/img/portfolio/img-1.jpg" alt="Graphic" />
					<figcaption>
						<h3>Project Name</h3>
						<p>Graphic</p>
						<i className="fas fa-image"></i>
						{/* <a href="/img/portfolio/img-1.jpg" className="image-link"></a> */}
					</figcaption>
				</figure>
			</div>
		</div>
	);
}

export default PortfolioItems;