import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';


import { Tasks } from './../../imports/api/Tasks.jsx'
import { Meteor } from 'meteor/meteor';

export default class Task extends Component {
	taskStateChange(event) {
	}
	render() {
		return (
			<div className="taskContainer">
			<TaskCreator />
			<TaskList />
			<TaskOptions taskStateChange={this.taskStateChange.bind(this)} />
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

		var tasks = Tasks.find().fetch();

		console.log(tasks);

		var taskList = tasks.map((task, key) => {
			return (
				<div className="task" key={key}>
				<p>
				{task.text}
				</p>
				</div>
				)
		})
	

		return (
			<div className="taskList">
				<h4>tasks</h4>
				<div className="dropdownContent">
					{taskList}
				</div>
			</div>
			);
	}
}

class TaskOptions extends Component {

	render() {
		return (
			<div className="taskOptions">
				<button onClick={this.taskStateChange}>start</button>
				
				<button onClick={this.taskStateChange}>remove</button>
			</div>
			);
	}
}