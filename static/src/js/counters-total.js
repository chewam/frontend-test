var React = require('react');

var CountersTotal = React.createClass({
    render: function() {
        var total = 0,
            data = this.props.data;

        for (var i = 0, l = data.length; i < l; i++) {
            total += data[i].count;
        }

        return (
            <div className="total">
                <div className="label">Total</div>
                <div className="count">{total}</div>
            </div>
        );
    }
});

module.exports = CountersTotal;
