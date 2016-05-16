var React = require('react');
var marked = require('marked');
var moment = require('moment');
module.exports = React.createClass({
    render: function(){
        console.log(this.props.commentData);
        return (<div className="comment">
        <div className="commentMeta">
        <span className="commentTime">
        Posted: {moment(this.props.commentData.timePosted).format('MMMM Do YYYY, h:mm a')}
        </span>
        &nbsp;
        <span className="commentAuthor">
        by {this.props.commentData.author}
        </span>
        </div>
        <br />
        <div className="commentContent" dangerouslySetInnerHTML={this.rawMarkup(this.props.commentData.content)}>
        </div>
        <br />
        </div>);
    },
    rawMarkup: function(value) {
      var rawMarkup = marked(value, {sanitize: true});
      return { __html: rawMarkup };
    }
});