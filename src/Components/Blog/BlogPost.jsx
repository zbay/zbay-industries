var React = require('react');
var moment = require('moment');
var marked = require('marked');
var Link = require('react-router').Link;

module.exports = React.createClass({
    render: function(){
        console.log("timePosted: " + this.props.postData.timePosted);
        var postTime = moment(this.props.postData.timePosted).format('MMMM Do YYYY, h:mm a');
        return (<div className="blogPost">
        <Link to={"/blogpost/" + this.props.postData.postNum}><h4 className="postTitle">{this.props.postData.title || ""}</h4></Link>
        <div className="postTime">{postTime || ""}</div>
        <div className="postContent" dangerouslySetInnerHTML={this.rawMarkup(this.props.postData.summaryContent)}></div>
        </div>);
    },
    rawMarkup: function(value) {
      var rawMarkup = marked(value, {sanitize: true});
      return { __html: rawMarkup };
    }
});