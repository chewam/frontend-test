var React = require('react');

var CountersInput = React.createClass({
    getInitialState: function() {
        return {title: ''};
    },
    handleTitleChange: function(e) {
        this.setState({title: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var title = this.state.title.trim();
        if (!title) return;
        this.props.onCounterAdd({title: title});
        this.setState({title: ''});
    },
    render: function() {
        return (
            <form className="input" onSubmit={this.handleSubmit}>
                <input type="text" autoFocus
                    value={this.state.title}
                    placeholder="Add a counter..."
                    onChange={this.handleTitleChange} />
            </form>
        );
    }
});

module.exports = CountersInput;
