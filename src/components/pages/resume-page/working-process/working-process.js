import React from 'react';
import './working-process.css';

const WorkingProcess = () => {
	return (
		<div>
			<div className="header-box mb-50">
				<h3>My Working Process</h3>
			</div>
			<div className="box work-process mb-100">
				<div className="row">
					<div className="col-lg-4 col-sm-12 ltr">
						{/* Process Item */}
						<div className="item width-sm process-1">
							<p className="step">01</p>
							<h4>Discuss idea</h4>
							<p>I could describe these conceptions, also impress upon paper all that is living.</p>
						</div>
						{/* Process Item */}
						<div className="item width-sm process-2">
							<p className="step">02</p>
							<h4>Creative concept</h4>
							<p>I could describe these conceptions, also impress upon paper all that is living.</p>
						</div>
					</div>
					<div className="col-lg-4 hidden-sm">
						<div className="circle">
							<h4>Working Process</h4>
							<span className="dots top-l"></span>
							<span className="dots bottom-l"></span>
							<span className="dots top-r"></span>
							<span className="dots bottom-r"></span>
						</div>
					</div>
					<div className="col-lg-4 col-sm-12 rtl">
						{/* Process Item */}
						<div className="item width-sm process-3">
							<p className="step">03</p>
							<h4>Web concept</h4>
							<p>I could describe these conceptions, also impress upon paper all that is living.</p>
						</div>
						{/* Process Item */}
						<div className="item width-sm process-4">
							<p className="step">04</p>
							<h4>Final concept</h4>
							<p>I could describe these conceptions, also impress upon paper all that is living.</p>
						</div>
					</div> 
				</div>
			</div>
		</div>
	);
}

export default WorkingProcess;