var React = require('react');
var axios = require('axios');
var BlogPost = require('./BlogPost');
var PageBar = require('../Navigation/PageBar');
var perPage = 3;

module.exports = React.createClass({
    getInitialState: function(){
      return {"posts": []};  
    },
    componentDidMount: function(){
      this.getPosts(this.props.page);  
    },
    componentWillReceiveProps: function(nextProps){
       this.getPosts(nextProps.page);  
    },
    render: function(){
        return (<div id="blogList">
        <h3>Blog Posts</h3>
        <br />
        {this.renderPosts()}
        <PageBar page={this.props.page} hasNext={this.state.posts.length == perPage}/>
        </div>);
    },
    getPosts: function(page){
     let that = this;
     axios.post("/getPosts", {"page": parseInt(page)})
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