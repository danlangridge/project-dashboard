import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';


export default class Avatar extends Component {
	render() {
		return (
			<div className="avatar">
			<img src="https://avatars1.githubusercontent.com/u/1416807" />
			</div>
		);
	}
}