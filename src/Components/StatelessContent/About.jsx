var React = require('react');

module.exports = React.createClass({
    render: function(){
        return (
        <div id="about">
        <br/>
            <div className="blogPost">
                <h3>About "Us"</h3>
                <p>Zbay Industries is not a real company. At least, not yet. It's an ironic name for the modest career of 
                Zachary Williams.</p>
            </div>
            <div className="blogPost">
                <h3>About the "CEO"</h3>
                <img id="zach" src="../img/zachwilliamsheadshot.jpg"/>
                <p>Mr. Williams is a full-stack developer in the Washington, DC area. A class of 2016 college graduate slow to determine his desired career path,
                Zachary determined in 2017 that software development was probably a good way to make a living. He has since acquired 6 months of experience as a professional software engineer.
                He resigned his previous job to seek better mentorship, and is now carefully considering the next step in his career.</p>
                <p>
                    A double major in political science and information science at the esteemed University of North Carolina (Chapel Hill), Zach can think big. He thinks in terms of corporations, 
                    governments, ideologies, technology trends, and the systems that tie them together. But he can also think <em>small</em>.
                    He can think like a web browser, a front-end framework, a database, a server, a compiler, or a machine learning algorithm depending on what the job entails. 
                    He's willing to roll up his sleeves and get his hands dirty by helping to wrangle a messy codebase into something better.
                </p>
                <p>
                    Beyond the intricacies of software, however, he never forgets to consider the most important thing. <em>The customer</em>.
                    You know the old saying about customers: they're always right! At every stage of the software development process,
                    Zach will keep his eye on the ultimate prize: customer satisfaction.
                </p>
                <p>
                    Thoughtful on the big picture yet capable on the small one, Zach brings an uncommon combination of <em>broad perspective</em>, <em>attention to detail</em>, and <em>inquisitiveness</em> that make him a quick learner and an asset to any
                    software development team. Email him at zlwilliams@protonmail.com if you would like to learn more.
                </p>
            </div>
            <div className="blogPost">
                <h3>Skillz to pay the billz</h3>
                <ul>
                    <li>JavaScript</li>
                    <ul>
                        <li>Angular 2+</li>
                        <ul>
                            <li>Angular Material</li>
                        </ul>
                        <li>RxJS</li>
                        <li>Testing with Jasmine and Karma</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>jQuery and DOM manipulation</li>
                        <li>Socket.io</li>
                        <li>JSON Web Tokens</li>
                        <li>Visualization with D3.js</li>
                    </ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <ul>
                        <li>SASS</li>
                        <li>Bootstrap</li>
                        <li>Responsive design</li>
                    </ul>
                    <li>Python</li>
                    <ul>
                        <li>Django</li>
                        <li>Flask</li>
                    </ul>
                    <li>Java 8</li>
                    <ul>
                        <li>Play Framework</li>
                        <li>Spring</li>
                    </ul>
                    <li>Databases</li>
                    <ul>
                        <li>MySQL</li>
                        <ul>
                            <li>Relational database theory and design</li>
                            <li>Querying</li>
                            <li>Object relational mapping libraries</li>
                            <ul>
                                <li>SQLAlchemy (Python)</li>
                                <li>Hibernate (Java)</li>
                            </ul>
                        </ul>
                        <li>MongoDB</li>
                        <ul>
                            <li>Mongoose</li>
                        </ul>
                        <li>Redis</li>
                    </ul>
                    <li>Other</li>
                    <ul>
                        <li>Git version control</li>
                        <li>RESTful API design</li>
                        <li>Amazon Web Services</li>
                        <li>Docker</li>
                        <li>Continuous integration / Continuous delivery</li>
                    </ul>
                </ul>
            </div>
            </div>
        );
    }
}); 