var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
    render: function(){
        console.log("github: " + this.props.github);
        if(this.props.personalSite){
        return (<div className="portfolioItem">
        <Link to={this.props.url}><img src={this.props.thumbnail}/></Link>
        <br />
        <div className="caption">{this.props.caption}</div>
        <br />
        </div>);   
        }
        else{
        return (<div className="portfolioItem">
        <a href={this.props.url} target="_blank"><img src={this.props.thumbnail} id={this.props.github ? ("github"): ("")}/></a>
        <br />
        <div className="caption">{this.props.caption}</div>
        <br />
        </div>);   
        }
    }
});