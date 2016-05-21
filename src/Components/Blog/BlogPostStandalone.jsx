var React = require('react');
var axios = require('axios');
var moment = require('moment');
var marked = require('marked');
var FormAlert = require("../Alerts/FormAlert");
var CommentForm = require("../Comments/CommentForm");
var CommentList = require("../Comments/CommentList");

module.exports = React.createClass({
    getInitialState: function(){
      return {"postData": null, "errorMessage": null, "comments": [], "commentError": null};  
    },
    componentDidMount: function(){
      this.getPost();
      this.getComments();
    },
    render: function(){
        return (<div>
        <FormAlert errorMessage={this.state.errorMessage}/>
        {this.state.postData ? (<div className="blogPost"><h3 className="postTitleAlone">{this.state.postData.title || ""}</h3>
        <div className="postTime">{moment(this.state.postData.timePosted).format('MMMM Do YYYY, h:mm a')}</div>
        <div className="postContent" dangerouslySetInnerHTML={this.rawMarkup(this.state.postData.content || "")}></div>
        <div className="postCategory">Filed Under: {this.state.postData.category}</div>
        <br />
        </div>): (<span></span>)}
        <CommentList comments={this.state.comments}/>
        <CommentForm postNum={this.props.id} postComment={this.postComment} commentError={this.state.commentError}/>
        <br />
        </div>);
    },
    getPost: function(){
     var that = this;
     axios.post("/getPost", {postNum: that.props.id})
     .then(function(response){
         if(response.data.error){
             that.setState({"errorMessage": response.data.error});
         }
         else{
             that.setState({"postData": response.data.postData[0]});
         }
     });   
    },
    getComments: function(){
      var that = this;
      axios.post("/getComments", {postNum: that.props.id})
      .then(function(response){
         if(response.data.error){
             that.setState({"errorMessage": response.data.error});
         }
         else{
             that.setState({"comments": response.data.comments});
         }
      });
    },
    postComment: function(commentData){
        var that = this;
      axios.post("/addComment", {commentData: commentData})
      .then(function(response){
          if(response.data.error){
              that.setState({"commentError": response.data.error});
          }
          else{
              commentData.timePosted = response.data.timePosted;
              var newComments = that.state.comments;
              newComments.push(commentData);
              console.log("newComments: " + newComments);
              that.setState({"comments": newComments});
          }
      });  
    },
    rawMarkup: function(value) {
      var rawMarkup = marked(value, {sanitize: true});
      return { __html: rawMarkup };
    }
});