var React = require('react');
var BrowserHistory = require('react-router/lib/browserHistory');
module.exports = React.createClass({
    getInitialState: function(){
      return {"category": "All", "search": ""};
    },
    render: function(){
        return (<div id="blogNav">
        <label>Browse by category:</label>
        &nbsp;
        <select name="category" value={this.state.category} onChange={this.onCategoryChange}>
            <option value="All">All</option>
            <option value="Career">Career</option>
            <option value="Life">Life</option>
            <option value="Tech">Tech</option>
            <option value="Political">Political</option>
            <option value="Culture">Pop Culture</option>
            <option value="Miscellaneous">Miscellaneous</option>
        </select>
        &nbsp;&nbsp;&nbsp;
        &nbsp;
        <input name="search" placeholder="Search all posts" value={this.state.search} onChange={this.onSearchChange}/>
        <button id="blogNavButton" onClick={this.onSearchSubmit}>Go</button>
        </div>);
},
onCategoryChange: function(e){
    var state = {};
    state["category"] =  e.target.value;
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
    this.setState(state);
},
onSearchSubmit: function(){
    let that = this;
        if(that.state.search.length > 0){
             BrowserHistory.push("/blog/posts/search/" + that.state.search + "/1");
        }
}
});