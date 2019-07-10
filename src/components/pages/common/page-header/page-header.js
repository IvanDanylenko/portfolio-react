import React from 'react';
import './page-header.css';

const PageHeader = ({headerText}) => {
	return (
		<div className="page-header mb-100">
			<h2>{headerText}</h2>
			<span></span>
		</div>
	);
}

export default PageHeader;