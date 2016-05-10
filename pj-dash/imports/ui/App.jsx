import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Project from './Project.jsx';
import Task from './Task.jsx';
import NagBar from './NagBar.jsx';

export default class App extends Component {
    render() {
        return (
                <div className="container">
                <div className="topbar">
                <Task />
                </div>
                <div className="content">
                <Project user="danlangridge" project="project-dashboard"/>
                <Project user="danlangridge" project="glitter-game"/>
                <NagBar />
                </div>
            	</div>
               );
    }
}
