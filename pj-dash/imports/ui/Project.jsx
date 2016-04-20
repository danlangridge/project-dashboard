import React, { Component, PropTypes } from 'react';

import  Chart from './Chart.jsx';

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
            data: [
            { day: 0, additions: 2},
            { day: 1, additions: 1},
            { day: 2, additions: 3}
            ],
        };
    }
    render() {
        return ( 
                <div className="projectReport">
                <h3>ProjectReport</h3>
                <Chart height="300" width="800" data={[1,2,3,4,5,6,7,8,9,10]} />
                </div>
               );
    }
}

class CommitHistory extends Component {
    render () {
        return (
                <p>peep</p>
                );
    }
}
