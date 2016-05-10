var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
    render: function(){
        return (<div className="portfolioItem">
        <a href={this.props.url}><img src={this.props.thumbnail} height="200"/></a>
        <div className="caption">{this.props.caption}</div>
        </div>);
    }
});