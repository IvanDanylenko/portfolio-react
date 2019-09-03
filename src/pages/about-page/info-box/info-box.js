import React from 'react';
import './info-box.scss';

const InfoBox = () => {
	return (
		<div className="info box">
			<div className="row">
				<div className="col-lg-3 col-sm-4">
					<div className="photo">
						<img src="/img/user-photo.jpg" alt="" />
					</div>
				</div>
				<div className="col-lg-9 col-sm-8">
					<h4>Alex Smith</h4>
					<div className="loc">
						<i className="fas fa-map-marked-alt"></i>
						<span>New York, USA</span>
					</div>
					<p>Hello! I’m Alex Smith a self-taught & award winning Digital Designer & Developer with over five years work experience. I started in my children’s room, got pro at renowned digital agencies akij co and nork blue lebel. Now I’m based in USA, America, working for Apple fredmansky and enjoying the life in the countryside.</p>
					<p>I have couple of hobbies but I like to travel. I have already travelled almost all the districts of our country with my father. I am fond of fruit.</p>
				</div>
				<div className="col-lg-3 col-sm-4">
					<div className="info-icon">
						<i className="fas fa-award"></i>
						<div className="desc-icon">
							<h6>8 Years Job</h6>
							<p>Experience</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-sm-4">
					<div className="info-icon">
						<i className="fas fa-certificate"></i>
						<div className="desc-icon">
							<h6>500+ Projects</h6>
							<p>Completed</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-sm-4">
					<div className="info-icon">
						<i className="fas fa-user-astronaut"></i>
						<div className="desc-icon">
							<h6>Freelance</h6>
							<p>Available</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-sm-4 pt-50">
					<a href="link-here" className="btn-st">Download CV</a>
				</div>
			</div>
		</div>
	);
}

export default InfoBox;