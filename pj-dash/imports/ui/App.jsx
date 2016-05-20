import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Project from './Project.jsx';
import Task, { TaskAnalytics } from './Task.jsx';
import NagBar from './NagBar.jsx';
import TrelloBoard from './TrelloBoard.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';


export default class App extends Component {
    render() {
        return (
                <div className="container">
                <div className="topbar">
                <Task />
                <TrelloBoard />
                <AccountsUIWrapper />
                </div>
                <div className="content">
                <TaskAnalytics />
                <Project user="danlangridge" project="project-dashboard"/>
                <Project user="danlangridge" project="glitter-game"/>
                <NagBar />
                </div>
            	</div>
               );
    }
}
