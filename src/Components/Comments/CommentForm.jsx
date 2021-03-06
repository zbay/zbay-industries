var React = require('react');
var FormAlert = require('../Alerts/FormAlert');
module.exports = React.createClass({
    getInitialState: function(){
        return {"content": "", "author": "", "commentError": null};
    },
    render: function(){
        return (<div id="commentForm">
        <h3>Write a Comment</h3>
        <FormAlert errorMessage={this.props.commentError || this.state.commentError}/>
        <label>Author:</label>
        <br />
        <input name="author" value={this.state.author} onChange={this.onChange}/>
        <br /><br />
        <label>Comment text:</label>
        <br />
        <textarea name="content" value={this.state.content} onChange={this.onChange}/>
        <div id="markdownNotice">Note that you can use the <a href="http://assemble.io/docs/Cheatsheet-Markdown.html" target="_blank">Markdown language</a>
        &nbsp;for styling.</div>
        <br />
        <button onClick={this.submitComment}>Post</button>
        <br />
        </div>);
    },
    submitComment: function(){
        if(this.state.author.length > 0 && this.state.content.length > 0){
            this.props.postComment({"author": this.state.author, "content": this.state.content, "postNum": this.props.postNum});
            this.setState({"content": "", "commentError": null});   
        }
        else{
            this.setState({"commentError": "Please enter a name and some comment text before submitting a comment."});
        }
    },
    onChange: function(e){
        var state = {};
        state[e.target.name] =  e.target.value;
        this.setState(state);
    }
});