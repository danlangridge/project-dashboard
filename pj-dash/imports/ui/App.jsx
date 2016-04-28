import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Project from './Project.jsx';


export default class App extends Component {
    render() {
        return (
                <div className="container">
                <header>
                <Project />
                </header>
                </div>
               );
    }
}
