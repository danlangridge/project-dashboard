import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Project from './Project.jsx';

class App extends Component {
    render() {
        return (
                <div className="container">
                <header>
                <h1>Projects</h1>
                </header>
                </div>
               );
    }
}

export default createContainer(() => {
    return {
    };   
}, App);
