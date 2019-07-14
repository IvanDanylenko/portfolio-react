import React from 'react';
import './price.css';

const Price = () => {
	return (
		<div>
			<div className="header-box mb-90">
				<h3>Price</h3>
			</div>
			<div className="row">
				<div className="col-lg-4 col-sm-12">
					<div className="price box">
						<div className="price__head">
							<i className="fa fa-user"></i>
							<h4>Basic</h4> 
						</div>
						<div className="price__body">
							<div className="price__plan">
								<span className="currency">$</span>
								<span className="number">25</span>
								<span className="period">month</span>
							</div>
							<div className="price__list">
								<ul>
									<li>Web Design</li>
									<li>Web Development</li>
									<li className="disabled">Responsive Design</li>
									<li className="disabled">Game Development</li>
								</ul>
							</div>
						</div>
						<div className="price__footer">
							<a href="link-here" className="btn-st">Buy Now</a>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-12">
					<div className="price box">
						<div className="price__head">
							<i className="fa fa-briefcase"></i>
							<h4>Standard</h4>
						</div>
						<div className="price__body">
							<div className="price__plan">
								<span className="currency">$</span>
								<span className="number">40</span>
								<span className="period">month</span>
							</div>
							<div className="price__list">
								<ul>
									<li>Web Design</li>
									<li>Web Development</li>
									<li>Responsive Design</li>
									<li className="disabled">Game Development</li>
								</ul>
							</div>
						</div>
						<div className="price__footer">
							<a href="link-here" className="btn-st">Buy Now</a>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-12">
					<div className="price box">
						<div className="price__head">
							<i className="fa fa-globe"></i>
							<h4>Premium</h4>
						</div>
						<div className="price__body">
							<div className="price__plan">
								<span className="currency">$</span>
								<span className="number">55</span>
								<span className="period">month</span>
							</div>
							<div className="price__list">
								<ul>
									<li>Web Design</li>
									<li>Web Development</li>
									<li>Responsive Design</li>
									<li>Game Development</li>
								</ul>
							</div>
						</div>
						<div className="price__footer">
							<a href="link-here" className="btn-st">Buy Now</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Price;