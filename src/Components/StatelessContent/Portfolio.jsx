var React = require('react');
var PortfolioItem = require("./PortfolioItem");

module.exports = React.createClass({
    render: function(){
        //football clipart for CoachRank: https://openclipart.org/image/2400px/svg_to_png/102853/1293842064.png
        return (<div id="portfolio" className="container">
        <br />
        <h3 id="portfolioHeader">Products</h3>
        <br/>
        <div className="blogPost">
        <br />
        <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
                <PortfolioItem url="http://places2b.zbay.xyz" 
                thumbnail="../img/p2blogo.png"
                caption="August, 2018: An Angular 6 and Node app, built with the Yelp API, that serves as a day planner"/>   
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
                <PortfolioItem url="http://13.58.216.66/about" 
                thumbnail="../img/chartmanheader.png"
                caption="December, 2017: A MERN stack app, allowing users to track equity prices and technical indicators. Shows charts on demand, generated with D3.js."/>   
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
                <PortfolioItem url="http://13.58.160.141/about" 
                thumbnail="../img/p2.png"
                caption="November, 2017: A social media platform, built on the MEAN stack, that allows users to advertise events to the public or to friends. 
                    Pickup basketball, online games, volunteer projects, and business promotions, among other possible use cases"/>             
            </div>
        </div>
        <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
                <PortfolioItem url="http://ec2-18-222-1-167.us-east-2.compute.amazonaws.com/" 
                thumbnail="../img/nw.png"
                caption="September, 2017: A Django (full stack Python) app, with SQLAlchemy and jQuery, for browsing headlines and making notes to self"/>   
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
                <PortfolioItem url="https://have-a-word.herokuapp.com" 
                 thumbnail="../img/haveaword.png"
                 caption="May, 2016: A MERN stack app for ad-hoc chat rooms that can be password-protected and given a deadline for deletion."/>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
                <PortfolioItem url="/visualizations/nfl_coaches_offense"
                personalSite={true}
                thumbnail="../img/coachrank.png"
                caption="May, 2016: A D3 visualization representing the strengths and weakness of NFL coaches, primarily for fantasy football purposes."/>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
                <PortfolioItem url="http://www.ibiblio.org/paulgreen/index.html" thumbnail="../img/paulgreen.png"
                height="175"
                caption="November, 2015: A static website for a Chapel Hill nonprofit. To solidify
                my front-end design skills, I volunteered to help a local nonprofit redesign their site 
                for the first time since the late 1990's."/>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4"></div>
            <div className="col-sm-4 col-md-4 col-lg-4">
                 <PortfolioItem url="https://github.com/zbay" thumbnail="../img/zuperman2.png"
                 caption="My Github account, where you can find the repos for these projects"
                 width="150" github="true"/>
            </div>
        </div>
        </div>
        </div>);
    }
});