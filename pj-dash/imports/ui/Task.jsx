import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';


export default class Task extends Component {
	render() {
		return (
			<div className="taskContainer">
			<Button bsStyle="primary">Add Task</Button>
			</div>
			);
	}
}