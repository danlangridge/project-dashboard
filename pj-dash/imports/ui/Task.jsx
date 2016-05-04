import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Meteor } from 'meteor/meteor';

export default class Task extends Component {
	render() {
		return (
			<div className="taskContainer">
			<TaskCreator />
			</div>
			);
	}
}

class TaskCreator extends Component {
	handleSubmit(event) {
		event.preventDefault();

		const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

		Meteor.call('tasks.insert', text);

		ReactDOM.findDOMNode(this.refs.textInput).value = '';
	}

	render() {
		return ( 
				<div className="taskCreator">
				<form className="newTask" onSubmit={this.handleSubmit.bind(this)}>
				<input
					type="text"
					ref="textInput"
					placeholder="new task"
				/>
				</form>
				</div>
 			);
	}
}

class TaskList extends Component {
	render() {
		return (
			<div className="taskList">
			</div>
			);
	}
}