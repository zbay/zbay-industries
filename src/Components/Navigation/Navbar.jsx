var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
    render: function(){
        return (<nav>
        <div className="navCol"><Link to="/">Home</Link></div>
        <div className="navCol"><Link to="/portfolio">Peep My Portfolio</Link></div>
        <div className="navCol"><Link to="/blog">Browse My Blog</Link></div>
        </nav>);
    }
});