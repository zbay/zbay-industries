var React = require('react');
var PortfolioItem = require("./PortfolioItem");

module.exports = React.createClass({
    render: function(){
        //football image: https://openclipart.org/image/2400px/svg_to_png/102853/1293842064.png
        return (<div id="portfolio" className="container">
        <br />
        <h3>Products</h3>
        <br/>
        <div className="row">
            <div className="col-sm-4">
                <PortfolioItem url="https://opine-io.herokuapp.com/" 
                thumbnail="../img/opine.png"
                caption="April, 2016: A MERN stack app for soliting and offering opinions on various topics"/>    
            </div>
            <div className="col-sm-4">
                <PortfolioItem url="https://have-a-word.herokuapp.com" 
                 thumbnail="../img/haveaword.png"
                 caption="May, 2016: A MERN stack app for ad-hoc chat rooms that can be password-protected and given a deadline for deletion."/>
            </div>
            <div className="col-sm-4">
                <PortfolioItem url="" thumbnail="../img/coachrank.png"
                caption="May, 2016: A D3 visualization representing the strengths and weakness of NFL coaches, primarily for fantasy football purposes."/>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <PortfolioItem url="http://www.ibiblio.org/paulgreen/index.html" thumbnail="../img/paulgreen.png"
                height="175"
                caption="November, 2015: A static website for a Chapel Hill nonprofit. To solidify
                my front-end design skills, I volunteered to help a local nonprofit redesign their site 
                for the first time since the late 1990's."/>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                 <PortfolioItem url="https://github.com/zbay" thumbnail="../img/zuperman.jpg"
                 caption="My Github account, where you can find the repos for these projects"/>
            </div>
        </div>
        </div>);
    }
});