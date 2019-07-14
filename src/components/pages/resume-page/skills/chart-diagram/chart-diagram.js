import React from 'react';
import './chart-diagram.css';

class ChartDiagram extends React.Component {
	componentDidMount() {
		this.updateCanvas();
	}

	updateCanvas() {
		// get percent
		const percent = this.props.percent / 100;
		// get canvas width and height
		const { width, height } = this.refs.canvas;
		// get canvas context
		const ctx = this.refs.canvas.getContext('2d');
		// set line width
		ctx.lineWidth = 5;
		// draw background circle
		ctx.beginPath();
		ctx.arc(width / 2, height / 2, 62, 0, 2 * Math.PI);
		ctx.strokeStyle = '#0e0f10';
		ctx.stroke();
		// draw white circle
		ctx.beginPath();
		ctx.arc(width / 2, height / 2, 62, 0, 2*Math.PI*percent);
		ctx.strokeStyle = '#fff';
		ctx.stroke();
	}

	render () {
		const {percent, technology} = this.props;
		return (
			<div className="chart-diagram">
				<span>{percent}%</span>
				<p>{technology}</p>
				<canvas ref="canvas" width={130} height={130} />
			</div>
		);
	}
}

export default ChartDiagram;