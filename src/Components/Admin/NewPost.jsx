var React = require('react');
var axios = require('axios');
var FormAlert = require('../Alerts/FormAlert');

module.exports = React.createClass({
    getInitialState: function(){
        return {"username": "", "password": "", "title": "", "content": "", "category": "", "successMessage": null, "errorMessage": null};
    },
    render: function(){
        return (<div id="newPost">
        <FormAlert successMessage={this.state.successMessage} errorMessage={this.state.errorMessage}/>
        <h3>New Blog Post:</h3>
        <label>Username: </label>
        <br />
        <input name="username" onChange={this.onChange} value={this.state.username}/>
        <br /><br />
        <label>Password: </label>
        <br />
        <input name="password" type="password" onChange={this.onChange} value={this.state.password}/>
        <br /><br />
        <label>Title: </label>
        <br />
        <input name="title" onChange={this.onChange} value={this.state.title}/>
        <br /><br />
        <label>Content:</label>
        <br />
        <textarea rows="10" name="content" onChange={this.onChange} value={this.state.content}/>
        <br /><br />
        <label>Category:</label>
        <select name="category" value={this.state.category} onChange={this.onChange}>
            <option>---</option>
            <option value="Career">Career</option>
            <option value="Life">Life</option>
            <option value="Tech">Tech</option>
            <option value="Politics">Politics</option>
            <option value="Culture">Culture</option>
            <option value="Sports">Sports</option>
            <option value="Miscellaneous">Miscellaneous</option>
         </select>
        <br /><br />
        <button onClick={this.submitPost}>Post</button>
        <br /><br />
        </div>);
    },
    onChange: function(e){
        var state = {};
        state[e.target.name] =  e.target.value;
        this.setState(state);
    },
    submitPost: function(){
        let that = this;
        if(that.state.username.length > 0 && that.state.password.length > 0 && that.state.title.length > 0 && that.state.content.length > 0
        && that.state.category.length > 0){
        axios.post("/newPost", {"username": that.state.username, "password": that.state.password, "title": that.state.title.trim(),
            "content": that.state.content.trim(), "category": that.state.category.trim()
        })
        .then(function(response){
            if(response.data.success){
                that.setState({"successMessage": response.data.success, "errorMessage": null,
                    "title": "", "content": "", "category": ""
                });
            }
            else{
                that.setState({"errorMessage": response.data.error, "successMessage": null});
            }
        });
        }
        else{
            that.setState({"errorMessage": "Please fill out the entire form.", "successMessage": null});
        }
    }
});