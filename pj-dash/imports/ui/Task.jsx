import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import  Chart from './Chart.jsx';

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
				<Timer />
				<button onClick={this.taskStateChange}>stop</button>
			</div>
			);
	}
}

export class TaskAnalytics extends Component {
	render() {
		var data = [0,1,6,3,4,3,6,7,2,3,5,6,7,3,4,3,6,4,2,6,7,8,6];
		return (
			<div className="taskAnalytics">
			    <Chart height="400" width="800" data={data} />
			</div>
			);
	}
}

class Timer extends Component {
	setTime() {

    var currentdate = new Date();
    var hours = currentdate.getUTCHours();    

      // correct for number over 24, and negatives
      if( hours >= 24 ){ hours -= 24; }
      if( hours < 0   ){ hours += 12; }

      // add leading zero, first convert hours to string
      hours = hours + "";
      if( hours.length == 1 ){ hours = "0" + hours; }

      // minutes are the same on every time zone
      var minutes = currentdate.getUTCMinutes();

      // add leading zero, first convert hours to string
      minutes = minutes + "";
      if( minutes.length == 1 ){ minutes = "0" + minutes; }

      seconds = currentdate.getUTCSeconds();

      this.setState({
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });
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
        		<span className="time">{this.state.hours}:{this.state.minutes}:{this.state.seconds}</span>
			</div>		
			);
	}

}