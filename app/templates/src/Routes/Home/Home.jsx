import React, { Component } from "react";
import './home.scss';
import wave from '../../helpers/wave';
import settings from '../../settings';
class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}
	componentDidMount() {
		wave('waves');
	}
	render() {
		return (
			<div className="Home">
				<canvas id="waves"></canvas>
				<h2 className="intro-text">
					Welcome to {settings.AppName}
				</h2>
				<h3 className="description">
					{settings.description || "You didn't specify a description change it in settings.js"}
				</h3>
				<div className="center">
					<img src="/assets/img/il1.svg" alt="" className="illustration" />
				</div>
			</div>
		);
	}
}

export default Home;
