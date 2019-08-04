import React, { Component } from 'react';
import './portfolio-page.css';

import PageHeader from '../common/page-header';
import PortfolioFilter from './portfolio-filter';
import PortfolioItems from './portfolio-items';

class PortfolioPage extends Component {
	state = {
		selected: "all",
		filter: ["all", "brand", "design", "graphic"]
	}

	handleClick = (item) => {
		this.setState({
			selected: item
		})
	}

	render() {
		return (
			<section className="portfolio">
				<div className="container">
					<PageHeader headerText={"Portfolio"} />
					{/* Portfolio filter */}
					<PortfolioFilter 
							selected = { this.state.selected } 
							filter = { this.state.filter } 
							handleClick = {this.handleClick} 
					/>
					{/* Portfolio items */}
					<PortfolioItems />
				</div>
			</section>
		);
	}
}

export default PortfolioPage;