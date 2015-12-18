var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Counter = require('./counter');

var CountersList = React.createClass({
    handleCountClick: function(index, action) {
        var counter = this.props.data[index];
        this.props.onCounterChange(counter.id, action);
    },
    handleDeleteClick: function(index) {
        var counter = this.props.data[index];
        this.props.onCounterDelete(counter.id);
    },
    render: function() {
        var counters = this.props.data.map(function(counter, index) {
            return (
                <Counter
                    key={counter.id}
                    title={counter.title}
                    count={counter.count}
                    onDeleteClick={this.handleDeleteClick.bind(this, index)}
                    onPlusClick={this.handleCountClick.bind(this, index, 'inc')}
                    onMinusClick={this.handleCountClick.bind(this, index, 'dec')} />
            );
        }, this).sort(function (a, b) {
            return a.props.title.localeCompare(b.props.title);
        });

        return (
            <div className="list">
                <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    {counters}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});

module.exports = CountersList;
