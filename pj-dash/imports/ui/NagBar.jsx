import React, { Component, PropTypes } from 'react';


export default class NagBar extends Component {
	getTime() {

	}
	render() {
		var date = new Date();
		var size = date.getHours()*((window.innerWidth)/24) + "px";
		return (
			<div className="nagBar">
				<div className="timeLeftBar" style={{width: size}}  />
			</div>
			);
	}
}