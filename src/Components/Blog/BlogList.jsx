var React = require('react');
var axios = require('axios');
var BlogPost = require('./BlogPost');

module.exports = React.createClass({
    getInitialState: function(){
      return {"posts": []};  
    },
    componentDidMount: function(){
      this.getPosts();  
    },
    render: function(){
        return (<div id="blogList">
        <h3>Blog Posts</h3>
        <br />
        {this.renderPosts()}
        </div>);
    },
    getPosts: function(){
     let that = this;
     axios.post("/getPosts", {"page": parseInt(that.props.page)})
     .then(function(response){
         console.log(response.data.error);
         console.log(response.data.posts);
         if(response.data.error){
             that.setState({"errorMessage": response.data.error});
         }
         else{
             that.setState({"posts": response.data.posts});
         }
     });         
    },
    renderPosts: function(){
        let that = this;
        if(that.state.posts && that.state.posts.length <= 0){
            return (<span></span>);
        }
        else{
          return (that.state.posts.map(function(post, index){
            return (<BlogPost key={index} postData={post}/>)
        }));   
        }
    }
});