import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

import  Chart from './Chart.jsx';
import Avatar from './Avatar.jsx';

export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            project: this.props.project,
        };
        this.getProjectSelection = this.getProjectSelection.bind(this);
    }
    getProjectSelection(event) {
        var projectInfo = event.target.value.split('\\', 2);
        this.setState({user: projectInfo[0], project: projectInfo[1]});
    }
    render() {
        return (
                <div className="project">
                <ProjectSelection user={this.state.user} project={this.state.project} updateSelection={this.getProjectSelection}/>
                <div className="projectInformation">
                <ProjectReport user={this.state.user} project={this.state.project} />
                <Issues user={this.state.user} project={this.state.project} />
                </div>
                </div>
               );
    }
}
Project.PropTypes = {
    user: "danlangridge",
    project: "project-dashboard",
}

class ProjectSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            project: this.props.project,
        };

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleProjectChange = this.handleProjectChange.bind(this);
    this.updateSelection = props.updateSelection;
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
                <ul className="projectSelection">
                    <li>
                        <Avatar />
                    </li>
                    <li>
                        <input
                            type="text"
                            name="userInput"
                            defaultValue={this.state.user} 
                            onChange={this.handleUserChange}
                        />
                    </li>
                    <li>
                        <input
                            type="text"
                            name="projectInput"
                            defaultValue={this.state.project}
                            onChange={this.handleProjectChange}
                        />
                    </li>
                    <li>
                        <button onClick={this.updateSelection} value={this.state.user + "\\" + this.state.project}>Retrieve</button>
                    </li>
                </ul>
                );
    }
}

ProjectSelection.PropTypes = {
    user: "danlangridge",
    project: "project-dashboard"
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
            Meteor.call('getGithubData', this.props.user, this.props.project, '/stats/participation',  (error, results) => {
            if (typeof results == "undefined") {
                empty = JSON.parse("{\"owner\":[0]}");
                this.setState({result: empty});

            } else {
                this.setState({result: JSON.parse(results)});
            }
            var data = this.state.result["owner"];
            console.log(data);
        });

    }
    render() {
        return ( 
                <div className="projectReport">
                <h3>Commit History</h3>
                <Chart height="300" width="400" data={this.state.result["owner"]} />
                </div>
               );
    }
}
ProjectReport.PropTypes = {
    user: "",
    project: ""
}

class Issues extends Component {
    constructor() {
        super();
        this.state = {
            result: []
        };
    }
    componentWillMount() {
        this.requestProjectIssues();
    }
    componentWillReceiveProps() {
        this.requestProjectIssues();
    }
    requestProjectIssues() {
        Meteor.call('getGithubData', this.props.user, this.props.project, '/issues', (error, results) => {
            if (typeof results !== "undefined") {
                this.setState({result: JSON.parse(results)});
            } 
        });
    }
    render() {
        console.log(this.state.result);
        var issueList;

        if (this.state.result.length <= 0) {
            issueList = <h4>No Issues currently assigned</h4>;
        } else {
        var issueList = _.map(this.state.result, function(issue, i) {
            return (
                <div className="issue" key={i}>
                <h4>{issue["title"]}</h4>
                <p>{issue["body"]}</p>
                </div>
                );
        });
    }
        return (
            <div className="issues">
            <h3>Issues</h3>
            {issueList}
            </div>
            );
    }

}
Issues.PropTypes = {
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

