var React = require('react');
var axios = require('axios');
var moment = require('moment');
var marked = require('marked');
var FormAlert = require("../Alerts/FormAlert");

module.exports = React.createClass({
    getInitialState: function(){
      return {"postData": null, "errorMessage": null};  
    },
    componentDidMount: function(){
      this.getPost();  
    },
    render: function(){
        return (<div>
        <FormAlert errorMessage={this.state.errorMessage}/>
        {this.state.postData ? (<div className="blogPost"><h3 className="postTitle">{this.state.postData.title || ""}</h3>
        <div className="postTime">{moment(this.state.postData.timePosted).format('MMMM Do YYYY, h:mm a')}</div>
        <div className="postContent" dangerouslySetInnerHTML={this.rawMarkup(this.state.postData.fullContent)}></div></div>): (<span></span>)}
        </div>);
    },
    getPost: function(){
     let that = this;
     axios.post("/getPost", {postNum: that.props.id})
     .then(function(response){
         if(response.data.error){
             that.setState({"errorMessage": response.data.error});
         }
         else{
             console.log("postData: " + JSON.stringify(response.data.postData));
             that.setState({"postData": response.data.postData[0]});
         }
     });   
    },
    rawMarkup: function(value) {
      var rawMarkup = marked(value, {sanitize: true});
      return { __html: rawMarkup };
    }
});