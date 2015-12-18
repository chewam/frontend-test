var React = require('react');

var Counter = React.createClass({
    render: function() {
        return (
            <div className="counter">
                <button onClick={this.props.onDeleteClick}>&#215;</button>
                <div className="title">{this.props.title}</div>
                <button onClick={this.props.onMinusClick}>&#8722;</button>
                <div className="count">{this.props.count}</div>
                <button onClick={this.props.onPlusClick}>&#43;</button>
            </div>
        );
    }
});

module.exports = Counter;
