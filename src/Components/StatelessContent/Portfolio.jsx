var React = require('react');
var PortfolioItem = require("./PortfolioItem");

module.exports = React.createClass({
    render: function(){
        //football image: https://openclipart.org/image/2400px/svg_to_png/102853/1293842064.png
        return (<div id="portfolio" className="container">
        <h3>Products</h3>
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-3">
                <PortfolioItem url="https://opine-io.herokuapp.com/" 
                thumbnail="../img/opine.png"
                caption="A MERN stack app for soliting and offering opinions on various topics"/>
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-3">
                 <PortfolioItem url="https://have-a-word.herokuapp.com" 
                 thumbnail="../img/haveaword.png"
                 caption="A MERN stack app for ad-hoc chat rooms that can be password-protected and given a deadline for deletion."/>
            </div>
            <div className="col-sm-2"></div>
        </div>
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-3">
                <PortfolioItem url="" thumbnail="../img/coachrank.png"
                caption="A D3 visualization representing the strengths and weakness of NFL coaches, primarily for fantasy football purposes."/>
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-3">
                 <PortfolioItem url="https://github.com/zbay" thumbnail="../img/zuperman.jpg"
                 caption="My Github account, where you can find the repos for these projects"/>
            </div>
            <div className="col-sm-2"></div>
        </div>
        </div>);
    }
});