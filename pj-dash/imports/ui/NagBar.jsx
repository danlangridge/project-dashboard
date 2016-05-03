import React, { Component, PropTypes } from 'react';


export default class NagBar extends Component {
	getTime() {
		var date = new Date();
		return date.getHour();
	}
	render() {
		return (
			<div className="nagBar">
			</div>
			);
	}
}