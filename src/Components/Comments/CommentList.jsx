var React = require('react');
var Comment = require("./Comment");
module.exports = React.createClass({
    render: function(){
        return (<div id="commentList">
        <h3 id="listHeader">Comments</h3>
        <br />
        {this.renderComments()}
        </div>);
    },
    renderComments: function(){
        let that = this;
        if(that.props.comments && that.props.comments.length <= 0){
            return (<div id="noComments">There are no comments on this post yet.</div>);
        }
        else{
          return (that.props.comments.map(function(comment, index){
            return (<Comment key={index} commentData={comment}/>)
        }));   
        }
    }
});