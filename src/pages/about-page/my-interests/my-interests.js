import React from 'react';
import './my-interests.scss';

const MyInterests = () => {
	return (
		<div>
			<div className="header-box">
				<h3>My Interests</h3>
			</div>
			<div className="box">
				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="inter-icon">
							<i className="fas fa-music"></i>
							<div className="desc-inter">
								<h6>Music</h6>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="inter-icon">
							<i className="fas fa-route"></i>
							<div className="desc-inter">
								<h6>Travelling</h6>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="inter-icon">
							<i className="far fa-image"></i>
							<div className="desc-inter">
								<h6>Photos</h6>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="inter-icon">
							<i className="fas fa-film"></i>
							<div className="desc-inter">
								<h6>Movies</h6>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="inter-icon">
							<i className="fas fa-space-shuttle"></i>
							<div className="desc-inter">
								<h6>Space</h6>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="inter-icon">
							<i className="fas fa-book"></i>
							<div className="desc-inter">
								<h6>Books</h6>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="inter-icon">
							<i className="fas fa-gamepad"></i>
							<div className="desc-inter">
								<h6>Video games</h6>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6">
						<div className="inter-icon">
							<i className="fas fa-tree"></i>
							<div className="desc-inter">
								<h6>Forest</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyInterests;