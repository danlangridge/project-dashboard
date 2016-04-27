import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Project from './Project.jsx';

import Avatar from './Avatar.jsx';

export default class App extends Component {
    render() {
        return (
                <div className="container">
                <header>
                <Avatar />
                <Project />
                </header>
                </div>
               );
    }
}
