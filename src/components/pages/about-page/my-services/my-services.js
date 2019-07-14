import React from 'react';
import './my-services.css';

const MyServices = () => {
	return (
		<div>
			<div className="header-box">
				<h3>Services</h3>
			</div>
			<div className="row mb-60">
				<div className="col-lg-6 col-sm-6">
					<div className="service box mb-40">
						<i className="fas fa-desktop"></i>
						<h4>Web Design</h4>
						<p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
					</div>
				</div>
				<div className="col-lg-6 col-sm-6">
					<div className="service box mb-40">
						<i className="fas fa-cogs"></i>
						<h4>Web Development</h4>
						<p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
					</div>
				</div>
				<div className="col-lg-6 col-sm-6">
					<div className="service box mb-40">
						<i className="fas fa-mobile-alt"></i>
						<h4>Responsive Design</h4>
						<p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
					</div>
				</div>
				<div className="col-lg-6 col-sm-6">
					<div className="service box mb-40">
						<i className="fas fa-medkit"></i>
						<h4>Quick Support</h4>
						<p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyServices;