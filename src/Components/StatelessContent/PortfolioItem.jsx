var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
    render: function(){
        if(this.props.personalSite){
        return (<div className="portfolioItem">
        <Link to={this.props.url}><img src={this.props.thumbnail} height={this.props.height || "150"} width={this.props.width || "350"}/></Link>
        <br />
        <div className="caption">{this.props.caption}</div>
        <br />
        </div>);   
        }
        else{
        return (<div className="portfolioItem">
        <a href={this.props.url} target="_blank"><img src={this.props.thumbnail} height={this.props.height || "150"} width={this.props.width || "350"}/></a>
        <br />
        <div className="caption">{this.props.caption}</div>
        <br />
        </div>);   
        }
    }
});