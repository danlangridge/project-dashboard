import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Project from './Project.jsx';
import Task from './Task.jsx';
import NagBar from './NagBar.jsx';

export default class App extends Component {
    render() {
        return (
                <div className="container">
                <div className="content">
                <Project />
                <NagBar />
                </div>
                {/*
                <div className="sideBar">
                <Task />
                </div>
            	*/}
                </div>
               );
    }
}
