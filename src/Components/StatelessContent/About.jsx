var React = require('react');

module.exports = React.createClass({
    render: function(){
        return (
        <div id="about">
        <h3>About "Us"</h3>
        <p>Zbay Industries is not a real company. At least, not yet. It's an ironic name for the modest and heretofore unprofitable career of 
        Zachary Williams.</p>
        <h3>About the CEO</h3>
        <p>I, Zachary Williams, am an aspiring full-stack web developer. 
        I graduated from UNC Chapel Hill in December with a worthless liberal arts degree. 
        I thought I wanted to be a lawyer until about a year ago,
        when I realized the error of my ways and decided to learn how to code. 
        Using free and cheap resources, including <a href="https://www.freecodecamp.com" target="_blank">FreeCodeCamp.com</a>, I taught myself 
        a full JavaScript stack. A committed and successful autodidact, 
        I am now positive that I can help almost any company in need of a JavaScript developer.</p>
        <h3>Specialties</h3>
        <p>I am comfortable with the following languages or technologies:</p>
        <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Client-side JavaScript, including the jQuery library</li>
        <li>Server-side JavaScript, with Node and Express</li>
        <li>React.js and related tools (React Router, ES5 transpilers, bundlers, the Flux pattern and Redux in particular)</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        </ul>
        <br />
        <p>I have some experience with the following languages/technologies:</p>
        <ul>
        <li>D3.js</li>
        <li>AngularJS 1 and 2</li>
        <li>Java</li>
        <li>PHP</li>
        <li>Python</li>
        </ul>
        <br />
        <p>I intend to learn more about the following technologies in the future, in approximate order of priority:</p>
        <ul>
        <li>AngularJS 2 (I've tinkered with the beta and many parts are still very buggy as of June, 2016. Will wait until an official release before making a full project with it.)
        </li>
        <li>React Native and mobile app development</li>
        <li>Java (in greater depth) and Spark</li>
        <li>D3 (in greater depth) and SVG</li>
        <li>PostgreSQL</li>
        <li>Ruby and Ruby on Rails</li>
        <li>Flask</li>
        </ul>
        <h3>Contact Zachary</h3>
        <p>If you want to say something about one of my blog posts, go comment on the post in question and I'll probably reply.
        If you're interested in hiring me, shoot me an email at <a href="mailto:zachwilliams@zbay.io">zachwilliams@zbay.io</a>.</p>
        <br/>
        </div>
        );
    }
}); 