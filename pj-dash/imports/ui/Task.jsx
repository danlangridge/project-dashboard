import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';


import { Tasks } from './../../imports/api/Tasks.jsx'
import { Meteor } from 'meteor/meteor';

export default class Task extends Component {
	render() {
		return (
			<div className="taskContainer">
			<TaskCreator />
			<TaskList />
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
	taskStateChange(event) {
		

	}

	render() {

		var tasks = Tasks.find().fetch();

		console.log(tasks);

		var taskList = tasks.map((task, key) => {
			return (
				<div className="task" key={key}>
				<ul>
				<li>
				<p>
				{task.text}
				</p>
				</li>
				<li>
				<button onClick={this.taskStateChange}>start</button>
				</li>
				</ul>
				</div>
				)	
		})
	

		return (
			<div className="taskList">
			{taskList}
			</div>
			);
	}
}