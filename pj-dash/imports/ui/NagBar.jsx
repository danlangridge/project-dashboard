import React, { Component, PropTypes } from 'react';


export default class NagBar extends Component {
	render() {
		var date = new Date();
		var size = date.getHours()*((window.innerWidth)/24) + "px";

		var startDate = new Date(1990, 9, 1);
		return (
			<div className="nagBar">
				<div className="timeLeftBar" style={{width: size}}>
				<div className="lifeRemaining">
					<h3>{Math.floor((date-startDate) / 86400000)} Days Remaining </h3>
				</div>
				</div>
			</div>
			);
	}
}