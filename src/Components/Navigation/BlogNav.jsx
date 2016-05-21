var React = require('react');
var BrowserHistory = require('react-router/lib/browserHistory');
module.exports = React.createClass({
    getInitialState: function(){
      return {"category": "All", "search": ""};
    },
    render: function(){
        return (<div id="blogNav" className="container">
        <div className="row">
        <div className="col-sm-6">
        <label>Browse by category:</label>
        &nbsp;
        <select name="category" value={this.state.category} onChange={this.onCategoryChange}>
            <option value="All">All</option>
            <option value="Career">Career</option>
            <option value="Life">Life</option>
            <option value="Tech">Tech</option>
            <option value="Politics">Politics</option>
            <option value="Culture">Pop Culture</option>
            <option value="Sports">Sports</option>
            <option value="Miscellaneous">Miscellaneous</option>
        </select>
        </div>
        <div className="col-sm-6">
        <input name="search" id="blogNavInput" placeholder="Search all posts" value={this.state.search} onChange={this.onSearchChange}/>
        <button id="blogNavButton" onClick={this.onSearchSubmit}>Go</button>
        </div>
        </div>
        </div>);
},
onCategoryChange: function(e){
    var state = {};
    state["category"] =  e.target.value;
    state["search"] = "";
    this.setState(state);
    if(e.target.value != "None"){
        if(e.target.value == "All"){
            BrowserHistory.push("/blog/posts/1");
        }
        else{
            BrowserHistory.push("/blog/posts/category/" + e.target.value + "/1");   
        }
    }
    },
onSearchChange: function(e){
    var state = {};
    state["search"] =  e.target.value;
    state["category"] =  "All";
    this.setState(state);
},
onSearchSubmit: function(){
    var that = this;
        if(that.state.search.length > 0){
             BrowserHistory.push("/blog/posts/search/" + that.state.search + "/1");
        }
}
});