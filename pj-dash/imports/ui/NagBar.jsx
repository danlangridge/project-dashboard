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
		var currentHour = new Date().getHours();
		var image = "/res/sun.png";

		if (currentHour > 18 || currentHour < 6) {
			var image = "/res/moon.png";
		}

		convertToRads = Math.PI/180;

		imgWidth = 170;
		imgHeight = 160;

		containerWidth = 400;
		containerHeight = 300;

		heightNorm = imgHeight/2/containerHeight*100;
		widthNorm = imgWidth/2/containerWidth*100;

		var left = Math.floor(Math.cos((currentHour*15 + 90)*convertToRads)*50 + 50) - widthNorm + "%";
		var top = Math.floor(Math.sin((currentHour*15 + 90)*convertToRads)*50 + 50) - heightNorm + "%";

		var style = "top:" + top + ";left:" + left + ";";

		return (
			<div className="circularDayTimer">
			<div className="dayOuter"
			style={
				{
				width: containerWidth + 'px',
				height: containerHeight + 'px'
				}
			}>
				<img src={image}
				style={
					{
						top: top,
						left: left,
						width: imgWidth + 'px',
						height: imgHeight + 'px'
					}
				} className="daylight" />
			</div>
			</div>
			);
	}

}