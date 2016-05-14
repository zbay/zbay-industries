var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
    render: function(){
        return (<nav>
        <div className="navCol"><Link to="/">Home</Link></div>
        <div className="navCol"><Link to="/portfolio">Peep My Portfolio</Link></div>
        <div className="navCol"><Link to="/blog">Browse My Blog</Link></div>
        </nav>);
    }
});