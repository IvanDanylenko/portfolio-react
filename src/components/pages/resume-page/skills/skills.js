import React from 'react';
import './skills.scss';

import ChartDiagram from './chart-diagram';

const Skills = () => {
	return (
		<div>
			<div className="header-box mb-50">
				<h3>Skills</h3>
			</div>
			<div className="box skills">
				<div className="row">
					<div className="col-lg-6 col-sm-6">
						<div className="item">
							<h4 className="progress-title">HTML5</h4>
							<div className="progress">
								<div className="progress-bar" style={{ width: 98 + '%' }}>
									<div className="progress-value">98%</div>
								</div>
							</div>
						</div>
						<div className="item">
							<h4 className="progress-title">CSS3</h4>
							<div className="progress">
								<div className="progress-bar" style={{ width: 85 + '%' }}>
									<div className="progress-value">85%</div>
								</div>
							</div>
						</div>
						<div className="item">
							<h4 className="progress-title">JavaScript</h4>
							<div className="progress">
								<div className="progress-bar" style={{ width: 90 + '%' }}>
									<div className="progress-value">90%</div>
								</div>
							</div>
						</div>
						<div className="item">
							<h4 className="progress-title">UI/UX designer</h4>
							<div className="progress">
								<div className="progress-bar" style={{ width: 77 + '%' }}>
									<div className="progress-value">77%</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-sm-6">
						{/* new row */}
						<div className="row">
							<div className="col-lg-6 col-sm-6">
								<ChartDiagram percent={80} technology={"PHP"} />
							</div>
							<div className="col-lg-6 col-sm-6">
								<ChartDiagram percent={70} technology={"Illustrator"} />
							</div>
							<div className="col-lg-6 col-sm-6">
								<ChartDiagram percent={60} technology={"Photoshop"} />
							</div>
							<div className="col-lg-6 col-sm-6">
								<ChartDiagram percent={90} technology={"AngularJS"} />
							</div>
						</div>
						{/* end new row */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;