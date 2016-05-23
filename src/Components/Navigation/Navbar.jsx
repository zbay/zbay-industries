var React = require('react');
var Link = require('react-router').Link;

var Navbar = React.createClass({
    getInitialState: function(){
        return {"currentPage": ""};
    },
    componentDidMount: function(){
        var that = this;
        var address = window.location.href;
        console.log(address);
        switch(address){
            case "http://www,zbay.io/portfolio":
            case "http://www,zbay.io/portfolio/":
            case "https://zbay.io/portfolio":
            case "https://zbay.io/portfolio/":
            case "https://www,zbay.io/portfolio":
            case "https://www,zbay.io/portfolio/":
            case "https://zbay.herokuapp.com/portfolio":
                console.log("setting portfolio");
                that.setState({"currentPage": "portfolio"});
                break;
            case "http://www.zbay.io/":
            case "http://www.zbay.io":
            case "https://zbay.io/":
            case "https://zbay.io":
            case "https://www,zbay.io/":
            case "https://www.zbay.io":
            case "https://zbay.herokuapp.com/":
               console.log("setting home");
               that.setState({"currentPage": "home"});
               break;
            case "https://zbay.io/blog/posts/1":
            case "http://zbay.io/blog/posts/1":
            case "https://www.zbay.io/blog/posts/1":
            case "http://www.zbay.io/blog/posts/1":
            case "https://zbay.herokuapp.com/blog/posts/1":
                console.log("setting blog");
                that.setState({"currentPage": "blog"});
                break;
            default:
                console.log("setting blank...");
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