import React from 'react';

import PageHeader from '../../components/page-header';
import Experience from './experience';
import Education from './education';
import Skills from './skills';
import WorkingProcess from './working-process';

const ResumePage = () => {
	return (
		<section className="resume">
			<div className="container">
				<PageHeader headerText={"Resume"} />
				<div className="row">
					<div className="col-lg-6 col-sm-12">
						<Experience />
					</div>
					<div className="col-lg-6 col-sm-12">
						<Education />
					</div>
				</div>
				<Skills />
				<WorkingProcess />
			</div>
		</section>
	);
}

export default ResumePage;