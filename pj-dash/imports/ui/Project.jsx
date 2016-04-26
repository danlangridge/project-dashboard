import React, { Component, PropTypes } from 'react';

import  Chart from './Chart.jsx';

import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';


export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "danlangridge",
            project: "project-dashboard"
        };

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleProjectChange = this.handleProjectChange.bind(this);
    }
    handleUserChange(event) {
        this.setState({user: event.target.value});
        console.log(event.target.value);

    }
    handleProjectChange(event) {
        this.setState({project: event.target.value});
        console.log(event.target.value);
    }
    render() {
        return (
                <div className="project">
                <h1> {this.state.user}\{this.state.project}</h1>
                <input
                    type="text"
                    name="userInput"
                    defaultValue={this.state.user} 
                    onChange={this.handleUserChange}
                    />
                <input
                    type="text"
                    name="projectInput"
                    defaultValue={this.state.project}
                    onChange={this.handleProjectChange}
                    />
                <ProjectReport user={this.state.user} project={this.state.project} />
                </div>
               );
    }
}
Project.PropTypes = {
    user: "",
    project: "project-dashboard",
}

class ProjectReport extends Component {
    constructor() {
        super();
        this.state = {
            result: {
                "owner":[0]
            }
        };
    }
    componentWillMount() {
        this.requestProjectData();
    }
    componentWillReceiveProps() {
        this.requestProjectData();
    }
    requestProjectData() {
            Meteor.call('projectGet', this.props.user, this.props.project, (error, results) => {
            this.setState({result: results});
            var data = this.state.result["owner"];
            console.log(data);
        })

    }
    render() {
        return ( 
                <div className="projectReport">
                <h3>Weekly Commit History</h3>
                <Chart height="300" width="800" data={this.state.result["owner"]} />
                <p>{JSON.stringify(this.state.result["owner"])}</p>
                </div>
               );
    }
}
ProjectReport.PropTypes = {
    user: "",
    project: ""
}

class CommitHistory extends Component {
    render () {
        return (
                <p>peep</p>
                );
    }
}
