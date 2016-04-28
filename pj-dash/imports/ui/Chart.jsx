import React, { Component, PropTypes } from 'react';

import { d3 } from 'meteor/d3';

export default class Chart extends Component {
    render() {
        return (
                <div className="chart">
                <svg height={this.props.height} width={this.props.width} >

                    <DataSeries data={this.props.data} height={this.props.height} width={this.props.width}  />
                </svg> 
                </div>
               ); 
    }
}
Chart.PropTypes = {
    height: 0,
    width: 0,
    data: []
}

class DataSeries extends Component {
    render() {
        
        var yScale = d3.scale.linear()
            .domain([0, d3.max(this.props.data)])
            .range([0, this.props.height]);
        
        var xScale = d3.scale.ordinal()
            .domain(d3.range(this.props.data.length))
            .rangeRoundBands([0, this.props.width], 0);

        var height = this.props.height;

        var axis = d3.svg.axis();

        var bars = _.map(this.props.data, function(point, i) {
            return (
                <Bar height={yScale(point)} width={xScale.rangeBand()} offset={xScale(i)} availableHeight={height} key={i} />
                ); 
        });
        return (
                <svg height={this.props.height} width={this.props.width} >
                <g>{bars}</g>
                </svg> 
               );
    }

}
DataSeries.props = {
    data: [],
    height: 0,
    width: 0
}

class Bar extends Component {
    render() {
        return (
                <rect className="additionBar" height={this.props.height} width={this.props.width} x={this.props.offset} y={this.props.availableHeight - this.props.height} />
               );
    }
}
Bar.props = {
    width: 0,
    height: 0,
    offset: 0
}
