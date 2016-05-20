import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';


export default class TrelloBoard extends Component {
	render() {
		Meteor.call('trello.getBoards');
		return (
			<div className="TrelloBoard">
			</div>
		);
	}
}