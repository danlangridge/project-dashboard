import React, { Component, PropTypes } from 'react';


export default class NagBar extends Component {
	render() {
		return (
			<CircularDayTimer />
			);
	}

}

class LinearDayTimer extends Component {
		render() {
		var date = new Date();
		var size = date.getHours()*((window.innerWidth)/24) + "px";

		var daysLeft = Math.floor((date-startDate) / 86400000);

		var startDate = new Date(1990, 9, 1);
		return (
			<div className="nagBar">
				<div className="timeLeftBar" style={{width: size}}>
				<div className="lifeRemaining">
					<h3>{daysLeft} Days Remaining </h3>
				</div>
				</div>
			</div>
			);
	}
}

class CircularDayTimer extends Component {
	render() {
		return (
			<div className="circularDayTimer">
			<div className="dayOuter">
				<img src="/res/sun.png" className="daylight" />
			</div>
			</div>
			);
	}

}