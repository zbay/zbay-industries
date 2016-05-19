var React = require('react');
var Link = require('react-router').Link;

var Navbar = React.createClass({
    getInitialState: function(){
        return {"currentPage": ""};
    },
    componentDidMount: function(){
        let that = this;
        switch(window.location.href){
            case "https://zbay-industries-zbay.c9users.io/portfolio":
                that.setState({"currentPage": "portfolio"});
                break;
            case "https://zbay-industries-zbay.c9users.io/":
            case "zbay-industries-zbay.c9users.io/":
            case "http://zbay-industries-zbay.c9users.io/":
               that.setState({"currentPage": "home"});
               break;
            case "https://zbay-industries-zbay.c9users.io/blog/posts/1":
                that.setState({"currentPage": "blog"});
                break;
            default:
                that.setState({"currentPage": ""});
        }
    },
    render: function(){
        let that = this;
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