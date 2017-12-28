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
                Zachary has at last determined that software development is probably a good way to make a living.</p>
                <p>
                    A double major in political science and information science at the esteemed University of North Carolina (Chapel Hill), Zach can think big. He thinks in terms of corporations, 
                    governments, ideologies, technology trends, and the systems that tie them together. But he can also think <em>small</em>.
                    He can think like a web browser, a front-end framework, a database, a server, a compiler, or a machine learning algorithm depending on what the job entails. 
                    He's willing to roll up his sleeves and get his hands dirty by helping to wrangle a messy codebase into something better.
                </p>
                <p>
                    Beyond the intricacies of software, however, he never forgets to consider the most important thing. <em>The customer</em>.
                    You know the old saying about customers: they're always right! At every stage of the software development process,
                    Zach will keep his eye on the ultimate prize: customer satisfaction. As the tech field grows more competitive by the day, 
                    user experience will become ever-more important for companies hoping to maintain a
                    competitive advantage. Long-term, he sees himself gravitating more toward front-end web technologies. Why? 
                    Because he can better understand them as they relate to the quality of a customer's experience, at the intuitive level.
                </p>
                <p>
                    Thinking on the large scale yet capable on the small scale, Zach brings an uncommon combination of <em>broad perspective</em>, <em>attention to detail</em>, and <em>inquisitiveness</em> that make him a quick learner and an asset to any
                    software development team. Email him at zlwilliams@protonmail.com if you would like to learn more.
                </p>
            </div>
            <div className="blogPost">
                <h3>Skillz to pay the billz</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <ul>
                        <li>SASS</li>
                        <li>Bootstrap</li>
                        <li>Responsive design</li>
                    </ul>
                    <li>JavaScript</li>
                    <ul>
                        <li>Angular 2/4/5</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>jQuery and DOM manipulation</li>
                        <li>Socket.io</li>
                        <li>JSON Web Tokens</li>
                        <li>Visualization with D3.js</li>
                    </ul>
                    <li>Python</li>
                    <ul>
                        <li>Django</li>
                        <li>Flask</li>
                    </ul>
                    <li>Java</li>
                    <ul>
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
                    </ul>
                    <li>Other</li>
                    <ul>
                        <li>Git version control</li>
                        <li>RESTful API design</li>
                        <li>Amazon Web Services</li>
                        <li>Heroku</li>
                        <li>Machine learning principles</li>
                    </ul>
                </ul>
            </div>
            </div>
        );
    }
}); 