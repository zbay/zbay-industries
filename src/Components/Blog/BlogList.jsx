var React = require('react');
var axios = require('axios');
var BlogPost = require('./BlogPost');
var PageBar = require('../Navigation/PageBar');
var perPage = 3;

module.exports = React.createClass({
    getInitialState: function(){
      return {"posts": [], "isLoading": true};  
    },
    componentDidMount: function(){
      var that = this;
      that.getPosts(that.props.page, that.props.category, that.props.query);  
      setTimeout(this.showError, 5000);
    },
    componentWillReceiveProps: function(nextProps){
       this.getPosts(nextProps.page, nextProps.category, nextProps.query);  
    },
    render: function(){
        return (<div id="blogList">
        <h3 id="listHeader">Blog Posts</h3>
        <br />
        {this.renderPosts()}
        <PageBar page={this.props.page} hasNext={this.state.posts.length == perPage} category={this.props.category} search={this.props.search}/>
        </div>);
    },
    getPosts: function(page, category, search){
     var that = this;
     console.log("category: " + category);
     axios.post("/getPosts", {"page": parseInt(page), "category": category, "search": search})
     .then(function(response){
         if(response.data.error){
             that.setState({"errorMessage": response.data.error});
         }
         else{
             that.setState({"posts": response.data.posts, "isLoading": false});
         }
     });         
    },
    renderPosts: function(){
        var that = this;
        if(that.state.posts && that.state.posts.length <= 0){
            if(!that.state.isLoading){
                return (<div id="formError">We could not find any posts that fit your description! Look elsewhere or try again later.</div>);
            }
            else{
            return (<img src="https://i.imgur.com/ybqOwLP.gif"/>);
            }
        }
        else{
          return (that.state.posts.map(function(post, index){
            return (<BlogPost key={index} postData={post}/>)
        }));   
        }
    },
    showError: function(){
        this.setState({"isLoading": false});
    }
});