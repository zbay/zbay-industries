var React = require('react');
var moment = require('moment');
var marked = require('marked');
var Link = require('react-router').Link;

module.exports = React.createClass({
    render: function(){
        var postTime = moment(this.props.postData.timePosted).format('MMMM Do YYYY, h:mm a');
        return (<div className="blogPost">
        <Link to={"/blog/post/" + this.props.postData.postNum}><h4 className="postTitle">{this.props.postData.title || ""}</h4></Link>
        <div className="postTime">{postTime || ""}</div>
        <br />
        <div className="postContent" dangerouslySetInnerHTML={this.rawMarkup(this.props.postData.content)}></div>
        <br />
        <div className="postCategory">Filed Under: {this.props.postData.category}</div>
        <br />
        </div>);
    },
    rawMarkup: function(value) {
      var rawMarkup = marked(value, {sanitize: true});
      return { __html: rawMarkup };
    }
});