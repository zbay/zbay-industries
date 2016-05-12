var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
    render: function(){
        return (<div className="portfolioItem">
        <a href={this.props.url} target="_blank"><img src={this.props.thumbnail} height={this.props.height || "150"}/></a>
        <div className="caption">{this.props.caption}</div>
        </div>);
    }
});