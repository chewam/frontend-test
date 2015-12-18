var $ = require('jquery');
var React = require('react');

var CountersList = require('./counters-list');
var CountersTotal = require('./counters-total');
var CountersInput = require('./counters-input');

var Counters = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        $.ajax({
            cache: false,
            dataType: 'json',
            url: '/api/v1/counters',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error('/api/v1/counters', status, err.toString());
            }.bind(this)
        });
    },
    handleCounterAdd: function(counter) {
        $.ajax({
            type: 'POST',
            data: counter,
            dataType: 'json',
            url: '/api/v1/counter',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error('/api/v1/counters', status, err.toString());
            }.bind(this)
        });
    },
    handleCounterChange: function(id, action) {
        $.ajax({
            type: 'POST',
            data: {id: id},
            dataType: 'json',
            url: '/api/v1/counter/' + action,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error('/api/v1/counters', status, err.toString());
            }.bind(this)
        });
    },
    handleCounterDelete: function(id) {
        $.ajax({
            type: 'DELETE',
            data: {id: id},
            dataType: 'json',
            url: '/api/v1/counter',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error('/api/v1/counters', status, err.toString());
            }.bind(this)
        });
    },
    render: function() {
        return (
            <div className="counters">
                <h3>COUNTERS</h3>
                <CountersInput onCounterAdd={this.handleCounterAdd} />
                <CountersList
                    data={this.state.data}
                    onCounterChange={this.handleCounterChange}
                    onCounterDelete={this.handleCounterDelete} />
                <CountersTotal data={this.state.data} />
            </div>
        );
    }
});

module.exports = Counters;

