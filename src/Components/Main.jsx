var React = require('react');
var Jumbotron = require("./StatelessUI/Jumbotron");
var Footer = require("./StatelessUI/Footer");
var Navbar = require("./Navigation/Navbar");

module.exports = React.createClass({
    render: function(){
        return (<div id="main">
        <Jumbotron />
        <Navbar />
       {this.props.children}
       <Footer />
        </div>);
    }
});