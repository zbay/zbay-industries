var React = require('react');

module.exports = React.createClass({
    render: function(){
        return (
        <div id="formAlert">
        {this.props.successMessage ? (<div id="formSuccess"><br />{this.props.successMessage}</div>): (<div><br /></div>)}
        {(this.props.errorMessage ? ( <div id="formError"><br />{this.props.errorMessage}</div>) : (<div><br /></div>))}
        </div>);
    }
});