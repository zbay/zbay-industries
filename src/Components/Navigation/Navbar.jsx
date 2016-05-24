var React = require('react');
var Link = require('react-router').Link;

var Navbar = React.createClass({
    getInitialState: function(){
        return {"currentPage": ""};
    },
    componentDidMount: function(){
        var that = this;
        var address = "" + window.location.href;
        if(address.indexOf("portfolio") > -1){
            that.setState({"currentPage": "portfolio"});
        }
        else if(address.indexOf("blog/post") > -1){
            that.setState({"currentPage": "blog"});
        }
        else if(address.length >= 20){
            that.setState({"currentPage": "home"});
        }
        else{
            that.setState({"currentPage": ""});
        }
    },
    render: function(){
        var that = this;
        return (<nav id="mainNav">
        <div className="navCol" id={that.state.currentPage == "home" ? ("currentNav") : ("")}>
        <Link to="/" onClick={this.showCurrentNav.bind(this, "home")}>Home</Link></div>
        <div className="navCol" id={that.state.currentPage == "portfolio" ? ("currentNav") : ("")}>
        <Link to="/portfolio" onClick={this.showCurrentNav.bind(this, "portfolio")}>Peep My Portfolio</Link></div>
        <div className="navCol" id={that.state.currentPage == "blog" ? ("currentNav") : ("")}>
        <Link to="/blog/posts/1" onClick={this.showCurrentNav.bind(this, "blog")}>Browse My Blog</Link></div>
        </nav>);
    },
   showCurrentNav: function(status){
      this.setState({"currentPage": status});
   }
});

module.exports = Navbar;