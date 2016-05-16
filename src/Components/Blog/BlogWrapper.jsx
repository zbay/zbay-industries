var React = require('react');
var BlogNav = require('../Navigation/BlogNav');

module.exports = React.createClass({
    render: function(){
        return (
        <div>
        <br />
        <BlogNav />
        {this.props.children}
        </div>
        );
    }
});