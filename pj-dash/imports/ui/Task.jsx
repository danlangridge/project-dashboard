import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import  Chart from './Chart.jsx';

import { Tasks } from './../../imports/api/Tasks.jsx'
import { Days } from './../../imports/api/Days.jsx'

import { Meteor } from 'meteor/meteor';

export default class Task extends Component {
	render() {
		return (
			<div className="taskContainer">
			<TaskCreator />
			<TaskSelection />
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
				/>
				</form>
				</div>
 			);
	}
}

class TaskSelection extends Component {
	render() {

		var tasks = Tasks.find().fetch();

		console.log(tasks);

		var taskList = tasks.map((task, key) => {
			return (
				<div className="task" key={key}>
				<p>
				{task.text}
				</p>
				<div className="taskId">
				{task._id}
				</div>
				</div>
				)
		})

		return (
			<div className="taskSelection">
			<Timer />
			<div className="taskList">

				<h4>tasks</h4>
				<div className="dropdownContent">
					{taskList}
				</div>
			</div>
			</div>
			);
	}
}

export class TaskAnalytics extends Component {
	render() {
		var days = Days.find().fetch();
		var data = [];
		 days.forEach( function (day) {
		 	data.push(day.tasks[0].seconds);
		 });
		 console.log(data);
		return (
			<div className="taskAnalytics">
			    <Chart height="400" width="800" data={data} />
			</div>
			);
	}
}

class Timer extends Component {
	constructor(props) {
		super(props);
		this.timerStateChange = this.timerStateChange.bind(this);
		this.timerClear = this.timerClear.bind(this);
		this.setTime = this.setTime.bind(this);
		this.state = {
			tick: false,
			timerStart: 0,
			timerEnd: 0,
			value: 0,
			hours: 0,
        	minutes: 0,
        	seconds: 0
		};
	}

	timerClear(event) {

	}

	timerStateChange(event) {
		console.log("button change");

		if (this.state.tick) {
		    var endTime = new Date().getTime();
			ReactDOM.findDOMNode(this.refs.timerButton).textContent = 'start';
		    Meteor.call('days.insert', endTime, Math.floor((endTime - this.state.timerStart)/1000));
		    console.log(Math.floor((endTime - this.state.timerStart)/1000));
		    this.setState({tick: !this.state.tick, timerEnd: endTime });
		} else {
			ReactDOM.findDOMNode(this.refs.timerButton).textContent = 'stop';
		    var startTime = new Date().getTime();
		    this.setState({tick: !this.state.tick, timerStart: startTime});
		}
	}

	setTime() {
		if (this.state.tick) {
			var value = this.state.value + 1;
			var seconds = value % 60;
			var minutes = Math.floor(value / 60);
			var hours = Math.floor(value / (3600));

			this.setState({
        		hours: hours,
        		minutes: minutes,
        		seconds: seconds,
      			value: value
      		});
		} else {
			if (this.state.value != 0) {
				this.setState({value: 0});
			}
			
		}
		

  }
  componentWillMount() {
    this.setTime();
  }	
  componentDidMount() {
     window.setInterval(function () {
      this.setTime();
    }.bind(this), 1000);
  }
	render() {
		return (
			<div className="timer">
				<button onClick={this.timerStateChange} ref="timerButton" >start</button>
        		<span className="time">{this.state.hours}:{this.state.minutes}:{this.state.seconds}</span>
			</div>		
			);
	}

}