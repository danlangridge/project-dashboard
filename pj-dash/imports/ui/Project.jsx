import React, { Component, PropTypes } from 'react';

import  Chart from './Chart.jsx';

import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';


export default class Project extends Component {
    render() {
        return (
                <div className="project">
                <h2>Master Project</h2>
                <ProjectReport />
                </div>
               );
    }
}

class ProjectReport extends Component {
    constructor() {
        super();
        this.state = {
            result: [],
            data: [
            { day: 0, additions: 2},
            { day: 1, additions: 1},
            { day: 2, additions: 3}
            ],
        };
    }
    componentWillMount() {
        Meteor.call('projectGet', "danlangridge", "project-dashboard", (error, results) => {
            this.setState({result: results});
            console.log(result);
        })

    }
    render() {
        return ( 
                <div className="projectReport">
                <h3>ProjectReport</h3>
                <Chart height="300" width="800" data={[1,2,3,4,5,6,7,8,9,10]} />
                <p>{this.state.result}</p>
                </div>
               );
    }
}
ProjectReport.props = {
    data: [],
}

class CommitHistory extends Component {
    render () {
        return (
                <p>peep</p>
                );
    }
}
